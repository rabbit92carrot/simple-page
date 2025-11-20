import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { inquiryStorage } from '../lib/supabase';
import { hashPassword, getAccessLevel } from '../lib/auth';
import './Inquiry.css';

const Inquiry = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const postId = searchParams.get('id');
  const action = searchParams.get('action');

  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [accessLevel, setAccessLevel] = useState(null);
  const [loading, setLoading] = useState(true);

  // Form states
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    contact: '',
    content: '',
    password: '',
  });

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    if (postId) {
      setSelectedPostId(postId);
      if (action === 'edit') {
        // Edit mode will be handled after password verification
      } else {
        // View mode
        setShowPasswordModal(true);
      }
    }
  }, [postId, action]);

  const loadPosts = async () => {
    setLoading(true);
    const { data, error } = await inquiryStorage.listPosts();
    if (!error && data) {
      setPosts(data);
    }
    setLoading(false);
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.author || !formData.contact || !formData.content || !formData.password) {
      alert('All fields are required');
      return;
    }

    const hashedPassword = await hashPassword(formData.password);
    const { data, error } = await inquiryStorage.createPost({
      title: formData.title,
      author: formData.author,
      contact: formData.contact,
      content: formData.content,
      password: hashedPassword,
    });

    if (error) {
      alert('Failed to create post');
      return;
    }

    // Reset form
    setFormData({
      title: '',
      author: '',
      contact: '',
      content: '',
      password: '',
    });
    setShowCreateForm(false);
    loadPosts();
    alert('Post created successfully!');
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordError('');

    if (!password) {
      setPasswordError('Please enter password');
      return;
    }

    const { data: post } = await inquiryStorage.getPost(selectedPostId);
    if (!post) {
      setPasswordError('Post not found');
      return;
    }

    const level = await getAccessLevel(password, post.password);
    if (!level) {
      setPasswordError('Incorrect password');
      return;
    }

    setAccessLevel(level);
    setCurrentPost(post);
    setShowPasswordModal(false);
    setPassword('');

    // If edit mode, populate form
    if (action === 'edit' && level === 'author') {
      setFormData({
        title: post.title,
        author: post.author,
        contact: post.contact,
        content: post.content,
        password: '',
      });
      setShowCreateForm(true);
    }
  };

  const handleUpdatePost = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.author || !formData.contact || !formData.content) {
      alert('Title, author, contact, and content are required');
      return;
    }

    const updates = {
      title: formData.title,
      author: formData.author,
      contact: formData.contact,
      content: formData.content,
    };

    // Only update password if provided
    if (formData.password) {
      updates.password = await hashPassword(formData.password);
    }

    const { error } = await inquiryStorage.updatePost(selectedPostId, updates);

    if (error) {
      alert('Failed to update post');
      return;
    }

    // Reset state
    setFormData({
      title: '',
      author: '',
      contact: '',
      content: '',
      password: '',
    });
    setShowCreateForm(false);
    setCurrentPost(null);
    setAccessLevel(null);
    setSelectedPostId(null);
    navigate('/inquiry');
    loadPosts();
    alert('Post updated successfully!');
  };

  const handleDeletePost = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) {
      return;
    }

    const { error } = await inquiryStorage.deletePost(selectedPostId);

    if (error) {
      alert('Failed to delete post');
      return;
    }

    setCurrentPost(null);
    setAccessLevel(null);
    setSelectedPostId(null);
    navigate('/inquiry');
    loadPosts();
    alert('Post deleted successfully!');
  };

  const handleClosePost = () => {
    setCurrentPost(null);
    setAccessLevel(null);
    setSelectedPostId(null);
    navigate('/inquiry');
  };

  const handleViewPost = (id) => {
    navigate(`/inquiry?id=${id}`);
  };

  const handleEditPost = () => {
    navigate(`/inquiry?id=${selectedPostId}&action=edit`);
  };

  if (loading) {
    return (
      <div className="inquiry-page">
        <div className="inquiry-container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="inquiry-page">
      <div className="inquiry-container">
        <div className="inquiry-header">
          <h1 className="inquiry-title">Inquiry Board</h1>
          <p className="inquiry-subtitle">
            Submit your inquiries and questions. Only you and administrators can view your posts.
          </p>
        </div>

        {!currentPost && !showCreateForm && (
          <>
            <div className="inquiry-actions">
              <button
                className="btn-create-post"
                onClick={() => setShowCreateForm(true)}
              >
                Create New Post
              </button>
            </div>

            <div className="posts-list">
              {posts.length === 0 ? (
                <div className="no-posts">
                  <p>No posts yet. Be the first to create one!</p>
                </div>
              ) : (
                <div className="posts-table-wrapper">
                  <table className="posts-table">
                    <thead>
                      <tr>
                        <th className="col-number">No.</th>
                        <th className="col-title">Title</th>
                        <th className="col-author">Author</th>
                        <th className="col-date">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((post, index) => (
                        <tr
                          key={post.id}
                          className="post-row"
                          onClick={() => handleViewPost(post.id)}
                        >
                          <td className="col-number">{posts.length - index}</td>
                          <td className="col-title">{post.title}</td>
                          <td className="col-author">{post.author}</td>
                          <td className="col-date">
                            {new Date(post.created_at).toLocaleDateString('ko-KR')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}

        {showCreateForm && !currentPost && (
          <div className="create-post-form">
            <h2>{action === 'edit' ? 'Edit Post' : 'Create New Post'}</h2>
            <form onSubmit={action === 'edit' ? handleUpdatePost : handleCreatePost}>
              <div className="form-group">
                <label htmlFor="title">Title *</label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="author">Your Name *</label>
                <input
                  type="text"
                  id="author"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact">Contact (Email or Phone) *</label>
                <input
                  type="text"
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="email@example.com or +82 10-1234-5678"
                  required
                />
                <small>Your contact will only be visible to you and administrators</small>
              </div>

              <div className="form-group">
                <label htmlFor="content">Content *</label>
                <textarea
                  id="content"
                  rows="10"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  {action === 'edit' ? 'New Password (leave empty to keep current)' : 'Password *'}
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required={action !== 'edit'}
                />
                <small>You will need this password to view, edit, or delete your post</small>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-submit">
                  {action === 'edit' ? 'Update Post' : 'Submit'}
                </button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => {
                    setShowCreateForm(false);
                    setFormData({
                      title: '',
                      author: '',
                      contact: '',
                      content: '',
                      password: '',
                    });
                    if (action === 'edit') {
                      navigate('/inquiry');
                    }
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {currentPost && (
          <div className="post-detail">
            <div className="post-detail-header">
              <div className="access-badge">
                {accessLevel === 'admin' ? '🔑 Admin View' : '✍️ Author View'}
              </div>
              <h2>{currentPost.title}</h2>
              <div className="post-detail-meta">
                <span>By {currentPost.author}</span>
                <span>•</span>
                <span>{new Date(currentPost.created_at).toLocaleString()}</span>
              </div>
            </div>

            <div className="post-detail-content">
              <div className="post-contact">
                <strong>Contact:</strong> {currentPost.contact}
              </div>
              <div className="post-body">
                <pre>{currentPost.content}</pre>
              </div>
            </div>

            <div className="post-detail-actions">
              <button className="btn-close" onClick={handleClosePost}>
                Back to List
              </button>
              {accessLevel === 'author' && (
                <>
                  <button className="btn-edit" onClick={handleEditPost}>
                    Edit
                  </button>
                  <button className="btn-delete" onClick={handleDeletePost}>
                    Delete
                  </button>
                </>
              )}
              {accessLevel === 'admin' && (
                <button className="btn-delete" onClick={handleDeletePost}>
                  Delete
                </button>
              )}
            </div>
          </div>
        )}

        {showPasswordModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Enter Password</h3>
              <p>Please enter your password or admin password to view this post</p>
              <form onSubmit={handlePasswordSubmit}>
                <div className="form-group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    autoFocus
                  />
                  {passwordError && <span className="error-text">{passwordError}</span>}
                </div>
                <div className="modal-actions">
                  <button type="submit" className="btn-submit">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => {
                      setShowPasswordModal(false);
                      setPassword('');
                      setPasswordError('');
                      setSelectedPostId(null);
                      navigate('/inquiry');
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inquiry;
