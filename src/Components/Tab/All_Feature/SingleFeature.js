import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { AllReply,  DescriptionContent, PostCol, ReplyContainer, PostDate, PostDescription, PostImg, PostImgContainer, PostTitle, RecentCol, RecentPost, RecentPostContainer, RecentPostTitle, ReplyImg, SingleFeatureRow, RecentContainer } from "./All_Feature_CSS";
import img from '../../../Images/download.jpg'
import imgs from '../../../Images/istockphoto-1179420343-612x612.jpg'
import { FeatureForm , FormFieldset, FormLegendTitle, FormInputTextarea } from '../Feature_Requests/FeatureRequests_CSS';

import { userContext } from "../../../App";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from 'react-hook-form';
import { Fragment } from "react";

const SingleFeature = () => {
    
  const { id } = useParams();
  const [post, setPost] = useState([]);
  console.log(post)
  const [AllUser, setAllUser] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [reply, setReply] = useState(false);
  const [comment, setComment] = useState([]);
  const { user } = useContext(userContext); 
const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const url = 'https://sorting-functionality-authlab.herokuapp.com/'
    const features = () => {
        fetch(url + `features/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data.docs));

        fetch(url + 'features/vote/recent')
        .then((res) => res.json())
        .then((data) => setRecentPosts(data.data));

        fetch(url + `reply/reply-feature/${id}`)
        .then((res) => res.json())
        .then((data) => setComment(data.reply));

        fetch(url + `user/all`)
        .then((res) => res.json())
        .then((data) => setAllUser(data.reply));
    }

  useEffect(() => {
    features()
  }, [id]);

  const history = useHistory();
  const handlePostClick = (id) => {
    history.push(`/single/feature/${id}`);
  };

  const onSubmitReply = (data) => {
        const replyDetail = { 
            reply: data.descriptions,
            replyUserId: user.id,
            featureId: id,
            replyFeatureId: id,
            totalComment: comment.length + 1 || 1
        }
        if (user.email) {
            fetch(url + 'reply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(replyDetail)
            })
            .then(res => res.json())
            .then(data => {
                if(data){                
                    toast.success('successfully reply', {
                        position: "bottom-right",
                    });
                    features();
                    reset();
                    setReply(false)
                }
            })
            .catch(err => {

            })
        } else {
            history.push('/login')
        }
    };


  return (
        <SingleFeatureRow>

            <PostCol>

             {/****************  post description ***********/}
                <PostImgContainer> <PostImg src={post.img || img} alt={post.name} />  </PostImgContainer> 
                <PostTitle>  {post.title}  </PostTitle> 
                <PostDescription> 
                    <DescriptionContent>
                        <img src={post.replyUserImg || img} alt={post.name}  width='50px' style={{borderRadius:'30px'}}/> 
                        <PostDate> 
                            <strong>{post.user && post.user.name}</strong> <br/>
                             {(new Date(post.date).toLocaleDateString())} 
                        </PostDate> 
                    </DescriptionContent>
                    <p>{post.description}</p>

                    {/**************** Reply ***********/}
                    {
                        reply ?
                            <FeatureForm onSubmit={handleSubmit(onSubmitReply)}>
                                <FormFieldset>
                                    <FormLegendTitle>Reply this post</FormLegendTitle>
                                        <FormInputTextarea  rows="4" cols="50" name="descriptions" type="text" placeholder="descriptions" {...register("descriptions", {required: true})}/>
                                        <span style={{color:"red"}}>{errors.Title?.type === 'descriptions' && "descriptions is required"}</span>

                                        <div>
                                            <button className='primary_BTN' type='submit' style={{marginRight:'10px'}}>Reply</button>
                                            <span className='primary_BTN_Outline' onClick={() => setReply(false)}>Close</span>
                                        </div>
                                </FormFieldset>
                            </FeatureForm>
                        : <button className='primary_BTN' onClick={() => setReply(true)}>Comment</button>
                    }


                </PostDescription>
                
                {/****************  All Reply ***********/}
                {comment.length > 0  && 
                     <ReplyContainer>
                        <FormFieldset>
                            <FormLegendTitle>All Reply</FormLegendTitle> 
                            {
                                comment && comment.map(comment => {
                                    return <Fragment key={comment._id}>
                                            <AllReply>
                                                <ReplyImg src={comment.replyUserId ? comment.replyUserId.img : imgs} alt={post.name} /> 
                                                <div>
                                                    <strong>{comment.replyUserId && comment.replyUserId.name}</strong> <br/>
                                                    <small>{(new Date(comment.date).toLocaleDateString())}</small>
                                                    <p>{comment.reply}</p>
                                                </div>
                                            </AllReply>
                                        </Fragment>
                                    })
                            }   
                        </FormFieldset>
                    </ReplyContainer>
                }
            </PostCol>



             {/****************  Recent Post ***********/}
            <RecentCol>
                <RecentContainer>
                    <RecentPost> Recent Post </RecentPost>
                    
                        {recentPosts.slice(0, 6).map((Post) => (
                            <RecentPostContainer key={Post._id}>
                                <RecentPostTitle onClick={() => handlePostClick(Post._id)}>
                                    {Post.title}
                                    <PostDate>{(new Date(Post.date).toLocaleDateString())}</PostDate>
                                </RecentPostTitle>
                            </RecentPostContainer>
                        ))}
                </RecentContainer>
            </RecentCol>
            <ToastContainer/>

    </SingleFeatureRow>
  );
};

export default SingleFeature;
