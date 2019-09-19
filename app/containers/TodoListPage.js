import React from 'react';
import Search from 'antd/lib/input/Search';

export default class TodoListPage extends React.Component {
  render() {
    return (
      <div>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
    );
  }
}
