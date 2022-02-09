import React, { Component } from 'react';
import s from './Section.module.css';

export default class Section extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <div className={s.container}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}
