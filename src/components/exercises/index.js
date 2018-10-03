import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import { withContext } from '../../context';
import Form from './Form';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: 5,
      height: 'calc(100% - 10px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56px - 48px)'
    }
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  }
});

const Exercises = ({
  classes,
  muscles,
  exercisesByMuscles,
  category,
  editMode,
  onSelect,
  exercise,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left'
  },
  onDelete,
  onSelectEdit,
  onEdit
}) => (
  <Grid container className={classes.container}>
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.paper}>
        {exercisesByMuscles.map(
          ([group, exercises]) =>
            !category || category === group ? (
              <React.Fragment key={group}>
                <Typography
                  color="secondary"
                  variant="headline"
                  style={{ textTransform: 'capitalize' }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton
                          color="primary"
                          onClick={() => onSelectEdit(id)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="primary"
                          onClick={() => onDelete(id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </React.Fragment>
            ) : null
        )}
      </Paper>
    </Grid>
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography variant="display1" color="secondary" gutterBottom>
          {title}
        </Typography>
        {editMode ? (
          <Form
            key={id}
            muscles={muscles}
            onSubmit={onEdit}
            exercise={exercise}
          />
        ) : (
          <Typography variant="subheading">{description}</Typography>
        )}
      </Paper>
    </Grid>
  </Grid>
);

export default withContext(withStyles(styles)(Exercises));
