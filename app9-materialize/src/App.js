import React from 'react';
import 'materialize-css';
import { Button, Row, Card, Col, CardTitle, Icon , Navbar, NavItem } from 'react-materialize';


class App extends React.Component {

  render(){
    return (
      <div>
          <Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="#">Logo</a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
  search
>
  <NavItem href="">
    Getting started
  </NavItem>
  <NavItem href="components.html">
    Components
  </NavItem>
</Navbar>

  <Button
  className="red"
  fab={{
    direction: 'top',
    toolbarEnabled: true
  }}
  floating
  large
  node="button"
></Button>


<Row>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with an image thumbnail.
    </Card>
  </Col>
</Row>
      </div>
    )
  }
}

export default App;
