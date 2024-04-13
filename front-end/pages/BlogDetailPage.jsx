// BlogDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetail from '../components/BlogDetail';

function BlogDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Detail Page</h1>
      <BlogDetail id={id} />
    </div>
  );
}

export default BlogDetailPage;
