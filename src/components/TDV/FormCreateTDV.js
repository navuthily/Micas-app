import React, { Component } from 'react'
import { Form, Input, Button, Checkbox , Modal} from 'antd';
export default class FormCreateTDV extends Component {
    state = {
      visible: false ,
      newItem: "",
      todoItems: [],
      isComplete: false,};
  
    showModal = () => {
      this.setState({
        visible: true,
       
      });
    };
  
    handleOk = (e)=> {
      e.preventDefault();
      this.setState({
        visible: false,
      });
      var text = this.newItem.value;
      console.log(text+'text')
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      if (this.state.content !== "") {
        this.setState({
          todoItems: [{
            content: text,
            isComplete: false
          }, ...this.state.todoItems]
        });
      }

     
    console.log(todoItems)
   
    };
    onKeyUp(event) {
      if (event.keyCode === 13) {
        let text = this.newItem.value;
        if (!text) {
          return;
        }
        text = text.trim();
        if (!text) {
          return;
        }
            this.setState({
              todoItems: [{
                content: text,
                isComplete: false
              }, ...this.state.todoItems],
            });
      }
    }
    onChange(event) {
      this.setState({
        newItem: event.target.value,
      });
    }
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
 
    render() {
      const { newItem, todoItems } = this.state;
      return (
        <>
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
   <Form>
   <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            initialValues={{
              remember: true,
            }}
        
          >
         <Form.Item
         label="Username"
         name="username"
         rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
        
      >
          <Input
            type="text"
            className="input-for-add"
            placeholder="What needs to be done?"
            onKeyUp={(e)=>this.onKeyUp(e)}
            onChange={(e)=>this.onChange(e)}
            value={newItem}
            ref={(input) => (this.newItem = input)}
          />
      </Form.Item>

          </Modal>
   </Form>
        </>
      );
    }
  }
  
