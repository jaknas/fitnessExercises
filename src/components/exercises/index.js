<<<<<<< HEAD
import React from 'react';
=======
import React, { Fragment } from 'react';
>>>>>>> csb-1537917512745
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
<<<<<<< HEAD
=======
import EditIcon from '@material-ui/icons/Edit';
import Form from './Form';
>>>>>>> csb-1537917512745

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
};

export default ({
  muscles,
  exercises,
  category,
  editMode,
  onSelect,
  exercise,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left'
  },
<<<<<<< HEAD
  onDelete
=======
  onDelete,
  onSelectEdit,
  onEdit
>>>>>>> csb-1537917512745
}) => (
  <Grid container spacing={24}>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(
          ([group, exercises]) =>
            !category || category === group ? (
              <React.Fragment key={group}>
                <Typography
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
<<<<<<< HEAD
=======
                        <IconButton onClick={() => onSelectEdit(id)}>
                          <EditIcon />
                        </IconButton>
>>>>>>> csb-1537917512745
                        <IconButton onClick={() => onDelete(id)}>
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
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1" gutterBottom>
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
