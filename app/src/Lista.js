import React from "react";
import {Button, Col, Form, ListGroup, Jumbotron} from "react-bootstrap"

class Lista extends React.Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.removerItem = this.removerItem.bind(this);

    this.state = {
      item: "",
      listas: []
    };
  };

  setItem(item) {
    this.setState({item: item});
  };

  editItem(item, indice) {
    let listatemp = this.state.listas;
    listatemp[indice] = item;

    this.setState({listas: listatemp});
  };

  addItem(e) {
    e.preventDefault();
    let item = this.state.item;

    if (item !== "") {
      let listaTemp = this.state.listas;
      listaTemp.push(item.toLowerCase());

      this.setState({
        listas: listaTemp,
        item: ""
      });
    }
  }

  removerItem(indice) {
    let listatemp = this.state.listas;
    listatemp.splice(indice, 1);

    this.setState({listas: listatemp});
  }

  render() {
    return (
        <div>
          <Form>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="informe a tarefa"
                    value={this.state.item}
                    onChange={(e) => {
                      this.setItem(e.target.value)
                    }}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit"
                        variant={"success"}
                        className="mb-2"
                        onClick={this.addItem}>
                  Add
                </Button>
              </Col>
            </Form.Row>
          </Form>

          <ListGroup>
            {
              this.state.listas.map((value, indice) => {
                let cor = value.includes("estudar") || value.includes("ler");
                return (
                    <ListGroup.Item variant={cor ? "primary" : ""} className={"text"}>
                      <Form.Control
                          className="mb-2"
                          id="inlineFormInput"
                          value={value}
                          onChange={(e) => {
                            this.editItem(e.target.value, indice)
                          }}
                      />
                      <Button type="button"
                              variant={"danger"}
                              className="mb-2 float-right"
                              onClick={(e) => {
                                this.removerItem(indice)
                              }}>
                        X
                      </Button>
                    </ListGroup.Item>
                )
              })
            }

          </ListGroup>
        </div>
    );
  }
}

export default Lista;
