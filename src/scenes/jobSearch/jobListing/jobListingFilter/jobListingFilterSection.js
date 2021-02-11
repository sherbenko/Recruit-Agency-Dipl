import React, {useState} from "react";
import {Collapse, Grid, Link, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({

  filterLinks: {
    color: '#30acff',
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: 'franklin-gothic-urw-cond, Helvetica ,Arial sans-serif',

  },
  listItem: {
    padding: '0 16px',
    wordBreak: 'break-word',
    marginLeft: '0',
    lineHeight: '24px',
    listStyleType: 'none'
  },
  listTitle: {
    fontFamily: 'franklin-gothic-urw-cond, Helvetica ,Arial sans-serif',
    margin: '0',
    display: 'block',
    fontSize: '1em',
    fontWeight: '500',
    lineHeight: '48px'
  },
  showMoreLink: {
    paddingTop: '15px'
  },
  linkListingContainer: {
    borderBottom: '1px solid #eee'
  }
}))
const JobListingFilterSection = ({items, sectionName}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [links, setLinks] = useState({items, itemsToShow: 5, showMore: false})
  const handleClickShowMoreOrganization = () => {
    setOpen(!open);
  };
  const showMore = () => {
    links.itemsToShow === 5 ? setLinks({
        items,
        itemsToShow: links.items.length,
        showMore: true
      }) :
      setLinks({items, itemsToShow: 5, showMore: false})
  }
  return (
    <>
      <ListItem button onClick={handleClickShowMoreOrganization}>

        <ListItemText className={classes.listTitle}>{sectionName}</ListItemText>
        {open ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit className={classes.linkListingContainer}>
        <List component="div" disablePadding>
          {
            links.items.slice(0, links.itemsToShow).map((org) => (
              <ListItem className={classes.listItem} key={org.id}>
                <Link to="/jobs" className={classes.filterLinks}>
                  {org.name} ({org.numOfJobs})
                </Link>
              </ListItem>
            ))
          }
          <ListItem className={classes.showMoreLink}>
            <Link className={classes.filterLinks} onClick={showMore}>
              {links.showMore ? 'SHOW LESS' : 'SHOW MORE'}
            </Link>
          </ListItem>
        </List>
      </Collapse>
    </>
  )
}
export default JobListingFilterSection