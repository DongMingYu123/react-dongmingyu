import React, { Component } from 'react'
import { Tabs, Button } from 'antd';
import axios from "axios"
import { Calendar } from 'antd';

const { TabPane } = Tabs;
export default class Dai extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
          { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
          { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
        ];
        this.state = {
          activeKey: panes[0].key,
          panes,
          shuzu:[]
        };
      }
    
      onChange = activeKey => {
        this.setState({ activeKey });
      };
    
      onEdit = (targetKey, action) => {
        this[action](targetKey);
      };
    
      add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
      };
    
      remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      };
      render() {
        return (
          <div className="shan">
          <div className="paiban">
          <div style={{ marginBottom: 16 }}>
              <Button onClick={this.add}>ADD</Button>
            </div>
            <Tabs
              hideAdd
              onChange={this.onChange}
              activeKey={this.state.activeKey}
              type="editable-card"
              onEdit={this.onEdit}
            >
              {this.state.panes.map(pane => (
                <TabPane tab={pane.title} key={pane.key}>
                  {pane.content}
                </TabPane>
              ))}
            </Tabs>
          </div>
            <div className="shijian">
            {/* function onPanelChange(value, mode) {
  console.log(value, mode);
}

ReactDOM.render(
  <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>,
  mountNode,
); */}
            </div>
            <div className="xuan">  
                {
                    this.state.shuzu.map((item,index)=>{
                        return <li>{item.handleState}</li>
                    })
                }
            
            
            </div>
          </div>
        );
      }
      componentDidMount(){
        axios.get("http://localhost:3000/api/list?order=1").then((res)=>{
        console.log(res)
        this.setState({
            shuzu:res.data.data
        })
        console.log(this.state.shuzu)
            
        })
      }
}
