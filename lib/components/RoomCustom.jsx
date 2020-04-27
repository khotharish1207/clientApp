import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardFooter
} from "reactstrap";

import Me from "./Me";
import ChatInput from "./ChatInput";

export default class Room extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Me />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
    
          </CardBody>
          <CardFooter>
            <ChatInput />
          </CardFooter>
        </Card>
      </div>
    );
  }
}
