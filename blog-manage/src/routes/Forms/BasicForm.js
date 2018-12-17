import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Form,
  Input,
  Upload,
  Button,
  Card,
  Icon,
  Message,
  InputNumber
} from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './style.less';

const FormItem = Form.Item;
const { TextArea } = Input;
const props = {
  action:'http://localhost:8080/api/imgupload',
  // action:"//jsonplaceholder.typicode.com/posts/",
  showUploadList:false,
  beforeUpload(file){
    const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return  isLt2M;
  },
  headers: {
   'X-Requested-With':null
  }
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
export default class BasicForms extends PureComponent {
  state={
    loading: false
  }
  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'form/submitRegularForm',
          payload: values,
        });
        console.log(values)
      }
    });
  };
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }

  
  render() {
    const { submitting, form } = this.props;
    const { getFieldDecorator, getFieldValue } = form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };
    
    const blogLogoUrl = this.state.backgroundLogoUrl;
    const blogBackgroundImageUrl = this.state.blogBackgroundImageUrl;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <PageHeaderLayout>
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label="博客logo">
              {getFieldDecorator('blogLogo', {
                rules: [
                  {
                    required: true,
                    message: '请上传博客logo',
                  },
                ],
              })(<Upload
                name="blogLogo"
                listType="picture-card"
                className="avatar-uploader"
                onChange={this.handleChange}
                {...props}
              >{blogLogoUrl ? <img style={{width:100}} src={blogLogoUrl} alt="blogLogo" /> : uploadButton}</Upload>)}
            </FormItem>
            <FormItem {...formItemLayout} label="博客背景图">
              {getFieldDecorator('blogBackgroundImage', {
                rules: [
                  {
                    required: true,
                    message: '请上传博客背景图',
                  },
                ],
              })(<Upload
                name="blogBackgroundImage"
                listType="picture-card"
                className="avatar-uploader"
                {...props}
                onChange={this.dodockedododochandleChange}
              >{blogBackgroundImageUrl ? <img src={blogBackgroundImageUrl} alt="blogBackgroundImage" /> : uploadButton}</Upload>)}
            </FormItem>
            <FormItem {...formItemLayout} label="博客名称">
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: '请输入标题',
                  },
                ],
              })(<Input placeholder="请输入博客名称" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="博客心情">
              {getFieldDecorator('blogMotion', {
                rules: [
                  {
                    required: true,
                    message: '请输入目标描述',
                  },
                ],
              })(
                <TextArea
                  style={{ minHeight: 32 }}
                  placeholder="请输入博客心情"
                  rows={4}
                />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="博客简介">
              {getFieldDecorator('blogSummary', {
                rules: [
                  {
                    required: true,
                    message: '请输入博客简介',
                  },
                ],
              })(<TextArea style={{ minHeight: 32 }} placeholder="请输入博客简介" rows={4} />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  每页展示卡片数量
                </span>
              }
            >
              {getFieldDecorator('blogCardLimit')(
                <InputNumber placeholder="请输入" min={3} max={12}/>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  最新文章的展示数量
                </span>
              }
            >
              {getFieldDecorator('blogAticleLimit')(
                <InputNumber placeholder="请输入" min={1} max={8}/>
              )}
            </FormItem>
            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" loading={submitting}>
                提交
              </Button>
              <Button style={{ marginLeft: 8 }}>保存</Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderLayout>
    );
  }
}
