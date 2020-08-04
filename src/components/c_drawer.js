import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import React from "react";

function DrawerList(itemList) {
    return <List>
        {itemList.map((text, index) => (
            <ListItem button key={text}>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>
}

export default DrawerList