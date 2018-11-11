import React, { Component } from 'react';
import {
  Typography,
} from '@material-ui/core';

class PostForm extends Component {
render() {
return (
<div>
<Typography variant="title" color="inherit">
  <h1>Create Post</h1>
  <form>
   <input required type="text" placeholder="Enter Post Title" /><br /><br />
   <textarea required rows="5" cols="28" placeholder="Enter Post" /><br /><br />
   <button>Post</button>
  </form>
  </Typography>
</div>
);
}
}
export default PostForm;
