import React, { useState } from 'react';
import './App.scss';
import { Header } from './Header';
import { Tabs } from './Tabs';
import { TabContent } from './TabContent';

export type TabsInfo = {
  title: string,
  content: string
}

class App extends React.PureComponent {

  state = {
    activeTabIndex: 0,
    tabsInfo: [
      {
        title: 'matches',
        content: 'matches list'
      },
      {
        title: 'battles',
        content: 'battles list'
      },
    ]
  }

  private handleTabClick = (index: number) => {
    this.setState({
      activeTabIndex: index,
    });
  }

  render() {
    const { activeTabIndex, tabsInfo } = this.state;
    const activeItem = tabsInfo[activeTabIndex];

    return (
      <div className="wrapper">
        <Header>
          <Tabs
            activeTabIndex={activeTabIndex}
            info={tabsInfo}
            handleTabClick={this.handleTabClick}
          />
        </Header>
        <main className="main">
          <TabContent list={activeItem.content} />
        </main>
      </div>
    );
  }
}

export { App };
