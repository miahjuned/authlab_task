import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { AllReply, AllReplyImg, PostCol, PostContainer, PostDate, PostDescription, PostImg, PostImgContainer, PostTitle, RecentCol, RecentPost, RecentPostContainer, RecentPostTitle, ReplyImg, SingleFeatureRow } from "./All_Feature_CSS";
import img from '../../../Images/download.jpg'
import imgs from '../../../Images/istockphoto-1179420343-612x612.jpg'
import { FeatureForm , FormLegend , FormSubmit , FormImgUpload , FormImgUploadLabel , FormImg , FormInput , FormFieldset, FeatureAddSubTitle , FeatureAll , FeatureAdd , FeatureContainer , FormLegendTitle, FormInputTextarea } from '../Feature_Requests/FeatureRequests_CSS';

import { userContext } from "../../../App";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from 'react-hook-form';

const SingleFeature = () => {
    
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [reply, setReply] = useState(false);
  const { user } = useContext(userContext); 
console.log(post.user)
const { register, handleSubmit, formState: { errors } } = useForm();

    const features = () => {
        fetch(`https://sorting-functionality-authlab.herokuapp.com/features/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data.docs));

        fetch(`https://sorting-functionality-authlab.herokuapp.com/features/vote/recent`)
        .then((res) => res.json())
        .then((data) => setRecentPosts(data.data));
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
            replyUser: user.name,
            replyUserImg: user.img,
            totalComment: post.totalComment + 1 || 1
        }
        console.log(replyDetail)
        if (user.email) {
            fetch(`https://sorting-functionality-authlab.herokuapp.com/features/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(replyDetail)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data){                
                    toast.success('successfully reply', {
                        position: "bottom-right",
                    });
                    features()
                }
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
                <PostDate>  {(new Date(post.date).toLocaleDateString())} </PostDate> 
                <PostContainer>
                        <AllReply>
                            <AllReplyImg>
                                <ReplyImg src={post.replyUserImg || img} alt={post.name} /> 
                            </AllReplyImg>
                            <div>
                                <strong>{post.user && post.user.name}</strong> <br/>
                                <p>{post.description}</p>
                            </div>
                        </AllReply>
                    <PostDescription>    </PostDescription>




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




                    {/****************  All Reply ***********/}
                    { post.reply && 
                        <FormFieldset>
                            <FormLegendTitle>All Reply</FormLegendTitle>
                            <AllReply>
                                <AllReplyImg>
                                <ReplyImg src={post.replyUserImg || imgs} alt={post.name} /> 
                                </AllReplyImg>
                                <div>
                                    <strong>{post.replyUser}</strong>
                                    <p>{post.reply}</p>
                                </div>
                            </AllReply>
                        </FormFieldset>
                    }
                </PostContainer>
            </PostCol>



             {/****************  Recent Post ***********/}
            <RecentCol>
                <RecentPost> Recent Post </RecentPost>
                
                    {recentPosts.slice(0, 6).map((Post) => (
                        <RecentPostContainer key={Post._id}>
                            <RecentPostTitle onClick={() => handlePostClick(Post._id)}>
                                {Post.title}
                                <PostDate>{(new Date(Post.date).toLocaleDateString())}</PostDate>
                            </RecentPostTitle>
                        </RecentPostContainer>
                    ))}
            </RecentCol>
            <ToastContainer/>

    </SingleFeatureRow>
  );
};

export default SingleFeature;
