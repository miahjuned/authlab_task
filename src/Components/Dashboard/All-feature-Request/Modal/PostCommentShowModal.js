import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { CommentModalBody, Modal, ModalComment, ModalContainer, ModalContent, ModalFooter, ModalFooterSubmitBtn,  ModalHeader, ModalHeaderClose, ModalHeaderCloseIcon, ModalHeaderTitle, ModalOverlay, ReplyDesccription, TotalComment } from '../../All-feature-Request/Modal/Modal_CSS';
import { TableBodyData } from '../AllFeatureRequest_CSS';

const PostCommentShowModal = ({ showCommentModal, setShowCommentModal, commentId , features}) => {
    const [comment, setComment] = useState([]);
  
  const url = 'https://sorting-functionality-authlab.herokuapp.com/'
  const reply = () => {
      fetch(url + `reply/reply-feature/${commentId}`)
      .then((res) => res.json())
      .then((data) => setComment(data.reply));
  }

    useEffect(() => {
        reply()
    }, []);


  const handleDelete = (replyId) => {
        fetch(url +`reply/${replyId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            if(data){                
                toast.success(data.message, {
                    position: "bottom-right",
                });
                features();
                reply()
            }
        })
  };

  return (
      <>
        {showCommentModal && (
          <>
            <Modal>
              <ModalContainer>
                {/*content*/}
                <ModalContent>
                  {/*header*/}

                  <ModalHeader>
                    <ModalHeaderTitle>Comment</ModalHeaderTitle>
                    <ModalHeaderClose onClick={() => setShowCommentModal(false)} >
                      <ModalHeaderCloseIcon title='modal close'>
                        <AiFillCloseCircle/>
                      </ModalHeaderCloseIcon>
                    </ModalHeaderClose>
                  </ModalHeader>


                  {/*body*/}
                    <CommentModalBody>
                      {
                        comment.length === 0 ? 
                          <TotalComment>no reply found</TotalComment> 
                        :
                          <TotalComment>Total reply : <span style={{color:'red'}}> {comment.length} </span></TotalComment>
                      }
                      {
                          comment.map((comment) => {
                              return <ModalComment key={comment._id}>
                                    <ReplyDesccription>{comment.reply.slice(0, 150) + '...'}</ReplyDesccription>
                                    <TableBodyData>{(new Date(comment.date).toLocaleDateString())}</TableBodyData>
                                    
                                    <ModalFooterSubmitBtn onClick={(e) => handleDelete(comment.featureId)} >
                                        Delete 
                                    </ModalFooterSubmitBtn>
                                </ModalComment>
                          })
                          
                      }
                      
                       
                    </CommentModalBody>

                    <ModalFooter>
                        <ModalFooterSubmitBtn type="button" onClick={() => setShowCommentModal(false)} >
                            Close 
                        </ModalFooterSubmitBtn>
                    </ModalFooter>
                </ModalContent>

              </ModalContainer>
            </Modal>
            <ModalOverlay></ModalOverlay>
          </>
        )}
      </>
    );
};

export default PostCommentShowModal;