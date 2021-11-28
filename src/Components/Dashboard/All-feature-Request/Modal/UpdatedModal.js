import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { Select } from '../../../Tab/All_Feature/All_Feature_CSS';
import { FeatureForm, FormFieldset, FormInput, FormLegend, FormLegendTitle } from '../../../Tab/Feature_Requests/FeatureRequests_CSS';
import { Modal, ModalBody, ModalContainer, ModalContent, ModalFooter, ModalFooterCloseBtn, ModalFooterSubmitBtn, ModalFormField, ModalHeader, ModalHeaderClose, ModalHeaderCloseIcon, ModalHeaderTitle, ModalOverlay } from '../../All-feature-Request/Modal/Modal_CSS';

const UpdatedModal = ({ showModal, setShowModal, updateId, features}) => {
  const [feature,setFeature] = useState([])
  const [StatusOption ,setStatusOption] = useState()
  console.log(feature)
  let url ='https://sorting-functionality-authlab.herokuapp.com/features/'
    const singleUser = () => {
        fetch(url + updateId)
        .then(res => res.json())
        .then(data => setFeature(data.docs))
    }

    useEffect(() => {
      singleUser()
    }, [])
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      const updatedInfo = { 
        title: data.Title || feature.title,
        description: data.Description || feature.description,
        reply: data.Reply || feature.reply,
        status: StatusOption || feature.status
      }
      console.log(updatedInfo)
          fetch(url + updateId, {
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(updatedInfo)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
              if(data){                
                  toast.success(data.message, {
                      position: "bottom-right",
                  });
                  setShowModal(false);
                  features()
              }
          })
  };
  return (
      <>
        {showModal && (
          <>
            <Modal>
              <ModalContainer>
                {/*content*/}
                <ModalContent>
                  {/*header*/}

                  <ModalHeader>
                    <ModalHeaderTitle> Feature Details </ModalHeaderTitle>
                    <ModalHeaderClose onClick={() => setShowModal(false)} >
                      <ModalHeaderCloseIcon title='modal close'>
                        <AiFillCloseCircle/>
                      </ModalHeaderCloseIcon>
                    </ModalHeaderClose>
                  </ModalHeader>


                  {/*body*/}
                    <ModalBody>
                      <FeatureForm onSubmit={handleSubmit(onSubmit)}>
                        <FormFieldset>
                            <FormLegendTitle>Feature updated</FormLegendTitle>
                            <ModalFormField>

                              <FormFieldset>
                                  <FormLegend>Title</FormLegend>
                                  <FormInput name="Title" title='Name' type="text" defaultValue={feature.title}  {...register("Title")}/>
                              </FormFieldset>

                              <FormFieldset>
                                  <FormLegend>Description</FormLegend>
                                  <FormInput name="Description" title='Email' type="text" defaultValue={feature.description} {...register("Description")}/>
                              </FormFieldset>

                              <FormFieldset>
                                  <FormLegend>Reply</FormLegend>
                                  <FormInput name="Reply" title='reply' type="text" defaultValue={feature.reply} {...register("Reply")}/>
                              </FormFieldset>

                              <FormFieldset>
                                  <FormLegend>Status</FormLegend>
                                  <Select onChange={(e) => setStatusOption(e.target.value)}>
                                      <optgroup label="Current">
                                        <option defaultValue={feature.status} >{feature.status} </option>
                                      </optgroup>
                                      <optgroup label="Select Status">
                                          <option value="planned">Planned</option>
                                          <option value="under-review">Under review</option>
                                          <option value="in-progress">In-progress</option>
                                          <option value="complete">complete</option>
                                          <option value="my-own">my-own</option>
                                      </optgroup>
                                  </Select>
                              </FormFieldset>
                            </ModalFormField>
                          
                        
                        </FormFieldset>
                        <ModalFooter>
                          <ModalFooterCloseBtn
                            type="button" onClick={() => setShowModal(false)} >
                            Close
                          </ModalFooterCloseBtn>

                          <ModalFooterSubmitBtn type="submit">
                            Save Changes
                          </ModalFooterSubmitBtn>

                        </ModalFooter>
                      </FeatureForm>
                    </ModalBody>
                </ModalContent>

              </ModalContainer>
            </Modal>
            <ModalOverlay></ModalOverlay>
          </>
        )}
      </>
    );
};

export default UpdatedModal;