import React from 'react';
import Search from 'antd/lib/input/Search';
import { List, Popconfirm } from 'antd';
import styles from './TodoListPage.css';

export default class TodoListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectIndex: 0
    };
  }

  handleAdd(value) {
    if (!value) {
      return;
    }

    const { data } = this.state;
    this.setState({ data: [...data, value] });
  }

  handleDelete() {
    const { data, selectIndex } = this.state;
    data.splice(selectIndex, 1);

    this.setState({ data });
  }

  handleSelect(e) {
    const { index } = e.currentTarget.dataset;
    this.setState({ selectIndex: index });
  }

  renderDeleteButton(index) {
    return (
      <Popconfirm
        placement="top"
        title="确定删除吗？"
        okText="确定"
        cancelText="取消"
        trigger="click"
        onConfirm={this.handleDelete.bind(this)}
      >
        <a
          role="button"
          tabIndex={0}
          data-index={index}
          className={styles.linkCr}
          key="list-loadmore-delete"
          onKeyPress={() => {}}
          onClick={this.handleSelect.bind(this)}
        >
          delete
        </a>
      </Popconfirm>
    );
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Search
          className={styles.search}
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => this.handleAdd(value)}
        />

        <div className={styles.dataList}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item
                actions={[
                  <a className={styles.linkCr} key="list-loadmore-edit">
                    edit
                  </a>,
                  this.renderDeleteButton(index)
                ]}
                className={styles.listItem}
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}
