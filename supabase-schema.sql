-- Create inquiry_posts table
CREATE TABLE IF NOT EXISTS inquiry_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  contact TEXT NOT NULL,
  content TEXT NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_inquiry_posts_created_at ON inquiry_posts(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE inquiry_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read post list (title, author, created_at only)
CREATE POLICY "Anyone can read post list" ON inquiry_posts
  FOR SELECT
  USING (true);

-- Create policy to allow anyone to insert posts
CREATE POLICY "Anyone can create posts" ON inquiry_posts
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow anyone to update posts (password verification handled in app)
CREATE POLICY "Anyone can update posts" ON inquiry_posts
  FOR UPDATE
  USING (true);

-- Create policy to allow anyone to delete posts (password verification handled in app)
CREATE POLICY "Anyone can delete posts" ON inquiry_posts
  FOR DELETE
  USING (true);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to call the function before update
DROP TRIGGER IF EXISTS update_inquiry_posts_updated_at ON inquiry_posts;
CREATE TRIGGER update_inquiry_posts_updated_at
  BEFORE UPDATE ON inquiry_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
