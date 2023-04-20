import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'My First Blog Post',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et odio eu velit pharetra imperdiet vitae quis mi. Aliquam vel sem quis nisl malesuada aliquet. Nullam eu iaculis ex. Proin laoreet arcu urna, a vehicula mauris vestibulum at. Praesent congue felis id nibh ullamcorper, feugiat vulputate tellus feugiat. Pellentesque at enim in nulla tincidunt congue.',
    },
    {
      id: 2,
      title: 'My Second Blog Post',
      content:
        'Duis eu lacus accumsan, finibus turpis ac, molestie magna. Vivamus vehicula molestie sapien, et bibendum lorem malesuada nec. Cras lacinia condimentum ipsum sed sodales. Suspendisse vel enim sed quam finibus pretium vitae eu turpis. Proin non eros non nibh pretium luctus eget non libero. Morbi eu congue turpis. Donec sed pulvinar ex.',
    },
  ]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddPost = () => {
    const newPost = {
      id: blogPosts.length + 1,
      title: title,
      content: content,
    };

    setBlogPosts([...blogPosts, newPost]);
    setTitle('');
    setContent('');
  };

  return (
    <Container>

      <Row className='justify-content-center'>
        <Col md={8}>
          <Form>
            <h1 align="center">GMHua Blog App</h1>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' value={title} onChange={handleTitleChange} />
            </Form.Group>

            <Form.Group controlId='content'>
              <Form.Label>Content</Form.Label>
              <Form.Control as='textarea' rows={10} value={content} onChange={handleContentChange} />
            </Form.Group>
            <br></br>
            <Button variant='primary' className='mb-3' onClick={handleAddPost}>
              Add Post
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col md={8}>
          {blogPosts.map((post) => (
            <div key={post.id} className='my-4'>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container >
    // <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    //   <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', padding: '1rem 0' }}>GMHua Blog App</h1>

    //   <div style={{ width: '75%', display: 'flex', justifyContent: 'center' }}>
    //     <div style={{ width: '100%' }}>
    //       <div style={{ display: 'flex', flexDirection: 'column', margin: '1rem 0' }}>
    //         <label htmlFor='title' style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Title</label>
    //         <input
    //           type='text'
    //           id='title'
    //           value={title}
    //           onChange={handleTitleChange}
    //           style={{ border: '1px solid #ccc', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}
    //         />
    //       </div>

    //       <div style={{ display: 'flex', flexDirection: 'column', margin: '1rem 0' }}>
    //         <label htmlFor='content' style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Content</label>
    //         <textarea
    //           id='content'
    //           rows='10'
    //           value={content}
    //           onChange={handleContentChange}
    //           style={{ border: '1px solid #ccc', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}
    //         ></textarea>
    //       </div>

    //       <button
    //         style={{ backgroundColor: 'blue', color: 'white', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer' }}
    //         onClick={handleAddPost}
    //       >
    //         Add Post
    //       </button>
    //     </div>
    //   </div>
    //   <div style={{ width: '75%', display: 'flex', justifyContent: 'center' }}>
    //     <div style={{ width: '100%' }}>
    //       {blogPosts.map((post) => (
    //         <div key={post.id} style={{ margin: '1rem 0' }}>
    //           <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{post.title}</h2>
    //           <p style={{ marginTop: '0.5rem' }}>{post.content}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    // <div className='App'>
    //   <h1 className='text-4xl text-center font-bold py-4'>My Blog</h1>

    //   <div className='flex justify-center'>
    //     <div className='w-3/4'>
    //       <div className='flex flex-col my-4'>
    //         <label htmlFor='title' className='text-lg'>
    //           Title
    //         </label>
    //         <input
    //           type='text'
    //           id='title'
    //           value={title}
    //           onChange={handleTitleChange}
    //           className='border border-gray-300 p-2 rounded-lg'
    //         />
    //       </div>

    //       <div className='flex flex-col my-4'>
    //         <label htmlFor='content' className='text-lg'>
    //           Content
    //         </label>
    //         <textarea
    //           id='content'
    //           rows='10'
    //           value={content}
    //           onChange={handleContentChange}
    //           className='border border-gray-300 p-2 rounded-lg'
    //         ></textarea>
    //       </div>

    //       <button
    //         className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    //         onClick={handleAddPost}
    //       >
    //         Add Post
    //       </button>
    //     </div>
    //   </div>

    //   <div className='flex justify-center'>
    //     <div className='w-3/4'>
    //       {blogPosts.map((post) => (
    //         <div key={post.id} className='my-4'>
    //           <h2 className='text-xl font-bold'>{post.title}</h2>
    //           <p className='mt-2'>{post.content}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
