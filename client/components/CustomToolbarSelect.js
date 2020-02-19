import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterIcon from "@material-ui/icons/FilterList";
import { withStyles } from "@material-ui/core/styles";

const defaultToolbarSelectStyles = {
    iconButton: {
        marginRight: "24px",
        top: "50%",
        display: "inline-block",
        position: "relative",
        transform: "translateY(-50%)"
    },
    deleteIcon: {
        color: "#000"
    }
};

class CustomToolbarSelect extends React.Component {

    handleClick = () => {
         /*   Meteor.call("doichain.getBalance", (error, bal) => {
                const tmpVal = bal;
                if(!error) {
                    this.setState({
                        balance: tmpVal
                    })
                }
            }); */
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={"custom-toolbar-select"}>
                <Tooltip title={"icon 2"}>
                    <IconButton className={classes.iconButton} onClick={this.handleClick}>
                        <FilterIcon className={classes.deleteIcon} />
                    </IconButton>
                </Tooltip>
                <Tooltip title={"icon 1"}>
                    <IconButton className={classes.iconButton} onClick={this.handleClick}>
                        <DeleteIcon className={classes.deleteIcon} />
                    </IconButton>
                </Tooltip>
            </div>
        );
    }
}

CustomToolbarSelect.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(defaultToolbarSelectStyles, {
    name: "CustomToolbarSelect"
})(CustomToolbarSelect);
