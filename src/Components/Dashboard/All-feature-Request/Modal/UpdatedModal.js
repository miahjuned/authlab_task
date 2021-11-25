import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { FeatureAddSubTitle, FeatureForm, FormFieldset, FormInput, FormLegend, FormLegendTitle, FormSubmit } from '../../../Tab/Feature_Requests/FeatureRequests_CSS';
import { Modal, ModalBody, ModalContainer, ModalContent, ModalFooter, ModalFooterCloseBtn, ModalFooterSubmitBtn, ModalFormField, ModalHeader, ModalHeaderClose, ModalHeaderCloseIcon, ModalHeaderTitle, ModalOverlay } from '../../All-feature-Request/Modal/Modal_CSS';
import { Select } from '../../../Tab/All_Feature/All_Feature_CSS';

const UpdatedModal = ({ showModal, setShowModal, updateId }) => {
  
  let history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      const updatedInfo = { 
          name: data.Name,
          email: data.Email,
          password: data.Password,
          role: data.Role
      }
      console.log(updatedInfo)
          fetch(`https://sorting-functionality-authlab.herokuapp.com/user/${updateId}`, {
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
              }
          })
    };
  return (
      <>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open regular modal
        </button>
        {showModal ? (
          <>
            <Modal>
              <ModalContainer>
                {/*content*/}
                <ModalContent>
                  {/*header*/}

                  <ModalHeader>
                    <ModalHeaderTitle> Modal Title </ModalHeaderTitle>
                    <ModalHeaderClose
                      onClick={() => setShowModal(false)}
                    >
                      <ModalHeaderCloseIcon title='modal close'>
                        <AiFillCloseCircle/>
                      </ModalHeaderCloseIcon>
                    </ModalHeaderClose>
                  </ModalHeader>


                  {/*body*/}
                    <ModalBody>
                      <FeatureForm onSubmit={handleSubmit(onSubmit)}>
                        <FormFieldset>
                            <FormLegendTitle>Updated info</FormLegendTitle>
                            <ModalFormField>

                              <FormFieldset>
                                  <FormLegend>Name</FormLegend>
                                  <FormInput name="Name" type="text" placeholder="Name" {...register("Name")}/>
                              </FormFieldset>

                              <FormFieldset>
                                  <FormLegend>Email</FormLegend>
                                  <FormInput name="Email" type="text" placeholder="Email" {...register("Email")}/>
                              </FormFieldset>

                              <FormFieldset>
                                  <FormLegend>Password</FormLegend>
                                  <FormInput name="Password" type="password" placeholder="Password" {...register("Password")}/>
                              </FormFieldset>

                              <FormFieldset>
                                  <FormLegend>Role</FormLegend>
                                  {/* <FormInput  type="text" placeholder="Role" {...register("Role")}/> */}
                                  <Select name="Role" {...register("Role")}>
                                      <optgroup label="Select Role">
                                          <option>Select Role</option>
                                          <option value="user">User</option>
                                          <option value="admin">Admin</option>
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
        ) : null}
      </>
    );
};

export default UpdatedModal;