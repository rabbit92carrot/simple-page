import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client only if credentials are provided
// Otherwise, we'll use localStorage mock storage
let supabase = null;
if (supabaseUrl && supabaseAnonKey && supabaseUrl !== 'mock') {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };

// For development: Mock storage using localStorage
class MockStorage {
  constructor() {
    this.storageKey = 'inquiry_posts';
  }

  async getPosts() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  async savePosts(posts) {
    localStorage.setItem(this.storageKey, JSON.stringify(posts));
  }

  async createPost(post) {
    const posts = await this.getPosts();
    const newPost = {
      id: Date.now().toString(),
      ...post,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    posts.push(newPost);
    await this.savePosts(posts);
    return { data: newPost, error: null };
  }

  async getPost(id) {
    const posts = await this.getPosts();
    const post = posts.find(p => p.id === id);
    return { data: post || null, error: post ? null : new Error('Post not found') };
  }

  async updatePost(id, updates) {
    const posts = await this.getPosts();
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) {
      return { data: null, error: new Error('Post not found') };
    }
    posts[index] = {
      ...posts[index],
      ...updates,
      updated_at: new Date().toISOString(),
    };
    await this.savePosts(posts);
    return { data: posts[index], error: null };
  }

  async deletePost(id) {
    const posts = await this.getPosts();
    const filtered = posts.filter(p => p.id !== id);
    if (posts.length === filtered.length) {
      return { data: null, error: new Error('Post not found') };
    }
    await this.savePosts(filtered);
    return { data: { id }, error: null };
  }

  async listPosts() {
    const posts = await this.getPosts();
    // Return only public fields for list view
    return {
      data: posts.map(({ id, title, author, created_at }) => ({
        id,
        title,
        author,
        created_at,
      })).sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
      error: null,
    };
  }
}

// Supabase Storage Implementation
class SupabaseStorage {
  constructor(client) {
    this.client = client;
    this.tableName = 'inquiry_posts';
  }

  async createPost(post) {
    const { data, error } = await this.client
      .from(this.tableName)
      .insert([post])
      .select()
      .single();

    return { data, error };
  }

  async getPost(id) {
    const { data, error } = await this.client
      .from(this.tableName)
      .select('*')
      .eq('id', id)
      .single();

    return { data, error };
  }

  async updatePost(id, updates) {
    const { data, error } = await this.client
      .from(this.tableName)
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    return { data, error };
  }

  async deletePost(id) {
    const { data, error} = await this.client
      .from(this.tableName)
      .delete()
      .eq('id', id)
      .select()
      .single();

    return { data, error };
  }

  async listPosts() {
    const { data, error } = await this.client
      .from(this.tableName)
      .select('id, title, author, created_at')
      .order('created_at', { ascending: false });

    return { data, error };
  }
}

// Export appropriate storage based on configuration
// Use Supabase if credentials are provided, otherwise use localStorage
export const inquiryStorage = supabase
  ? new SupabaseStorage(supabase)
  : new MockStorage();
