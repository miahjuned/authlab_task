import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { Select } from '../../../Tab/All_Feature/All_Feature_CSS';
import { useHistory } from 'react-router';
import { FeatureForm, FormFieldset, FormInput, FormLegend, FormLegendTitle } from '../../../Tab/Feature_Requests/FeatureRequests_CSS';
import { Modal, ModalBody, ModalContainer, ModalContent, ModalFooter, ModalFooterCloseBtn, ModalFooterSubmitBtn, ModalFormField, ModalHeader, ModalHeaderClose, ModalHeaderCloseIcon, ModalHeaderTitle, ModalOverlay } from '../../All-feature-Request/Modal/Modal_CSS';

const UserUpdatedModal = ({ showUserModal, setShowUserModal, updateId , features}) => {
  const [user,setUser] = useState([])
  
  let url ='https://sorting-functionality-authlab.herokuapp.com/user/'
    const singleUser = () => {
        fetch(url + updateId)
        .then(res => res.json())
        .then(data => setUser(data))
    }

    useEffect(() => {
      singleUser()
    }, [])

  let history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      const updatedInfo = { 
          role: data.Role
      }
          fetch(url + updateId, {
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(updatedInfo)
          })
          .then(res => res.json())
          .then(data => {
              if(data){                
                  toast.success(data.message, {
                      position: "bottom-right",
                  });
                  history.push('/dashboard/user');
                  setShowUserModal(false);
                  features()
              }
          })
  };
  return (
      <>
        {showUserModal && (
          <>
            <Modal>
              <ModalContainer>
                {/*content*/}
                <ModalContent>
                  {/*header*/}

                  <ModalHeader>
                    <ModalHeaderTitle> User Details </ModalHeaderTitle>
                    <ModalHeaderClose onClick={() => setShowUserModal(false)} >
                      <ModalHeaderCloseIcon title='modal close'>
                        <AiFillCloseCircle/>
                      </ModalHeaderCloseIcon>
                    </ModalHeaderClose>
                  </ModalHeader>


                  {/*body*/}
                    <ModalBody>
                      <FeatureForm onSubmit={handleSubmit(onSubmit)}>
                        <FormFieldset>
                            <FormLegendTitle>Role updated</FormLegendTitle>
                            <ModalFormField>

                              <FormFieldset>
                                  <FormLegend>Name</FormLegend>
                                  <FormInput name="Name" title='read only' type="text" value={user.name || ' '} disabled {...register("Name")}/>
                              </FormFieldset>

                              <FormFieldset>
                                  <FormLegend>Email</FormLegend>
                                  <FormInput name="Email" title='read only' type="text" value={user.email ||' '} disabled {...register("Email")}/>
                              </FormFieldset>

                              <FormFieldset>
                                  <FormLegend>Role</FormLegend>
                                  <Select name="Role" {...register("Role")}>
                                    <option defaultValue={user.role} >{user.role} </option>
                                      <optgroup label="Select Role">
                                          <option value="user">User</option>
                                          <option value="admin">Admin</option>
                                      </optgroup>
                                  </Select>
                              </FormFieldset>
                            </ModalFormField>
                          
                        
                        </FormFieldset>
                        <ModalFooter>
                          <ModalFooterCloseBtn
                            type="button" onClick={() => setShowUserModal(false)} >
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

export default UserUpdatedModal;