import React, { Component } from 'react';
import styled from "styled-components";
import PostComponent from './PostComponent'
import AddPost from './AddPost'

const ListWrap = styled.div`
width: 63vw;
height: 38vw;
margin-left: 2vw;
position: absolute;
background-color: white;
box-shadow:2px 4px 8px 2px rgba(0, 0, 0, 0.8);
bottom: 0;
`

class ListPost extends Component {
    render() {
        return (
            <ListWrap>
                <AddPost />
                <PostComponent />
                
            </ListWrap>
        );
    }
}

export default ListPost;