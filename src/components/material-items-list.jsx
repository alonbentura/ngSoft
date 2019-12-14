import React from "react";
import { MdClose } from "react-icons/md";

export class ItemsList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.items.length > 0 ? (
      <div>
        <div style={styles.itemsContainer}>
          <div style={styles.name}>שם מרכיב</div>
          <div style={styles.formula}>פורמולה</div>
          <div style={styles.formula}>מספר CAS</div>
        </div>
        <div>
          {this.props.items.map(item => {
            return this.renderItem(item);
          })}
        </div>
      </div>
    ) : null;
  }

  renderItem(item) {
    return (
      <div style={styles.file} key={item.id}>
        <div style={styles.itemName}>
          {this.props.icon ? (
            <MdClose
              style={styles.deleteFile}
              onClick={this.props.deleteFromList.bind(this, item)}
            />
          ) : null}
          {item.inventoryName}
        </div>
        <div style={styles.formulaName}>{item.molecularFormula}</div>
        <div style={styles.formulaName}>{item.casNumber}</div>
      </div>
    );
  }

  render() {
    return this.renderList();
  }
}

const styles = {
  file: {
    boxShadow: "grey 0px 0px 9px 2px",
    margin: "10px 0 10px 0",
    width: "100%",
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 3
  },
  deleteFile: { width: 25, height: 25, cursor: "pointer", marginLeft: 8 },
  name: {
    flex: 8,
    textAlign: "start",
    paddingRight: 50,
    color: "#55a1ff",
    fontWeight: "600"
  },
  formula: {
    flex: 2,
    textAlign: "center",
    color: "#55a1ff",
    fontWeight: "600"
  },
  itemName: {
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    flex: 8
  },
  formulaName: {
    flex: 2,
    textAlign: "center",
    borderRight: "solid grey 1px"
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
};
