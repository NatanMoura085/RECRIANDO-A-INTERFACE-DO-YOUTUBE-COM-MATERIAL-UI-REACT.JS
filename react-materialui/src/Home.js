import React from 'react';
import { makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    List,
    Typography,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Drawer,
    Box,
    ListSubheader,

} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle';
const useStyles = makeStyles((theme) => ({
    root: {

        height: '100vh',
    },
    AppBar: {

        boxShadow:'none',
        zIndex:theme.zIndex.drawer + 1,
        
    },
    logo:{
height:25,

    },

    drawer:{
width: 240,
flexShrink:0,

    },
    drawerPaper:{
        width:240,
        borderRight:'none',

    },

    Menuicons:{
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),

    },
    icons:{

paddingRight: theme.spacing(5),

    },
    grow:{
flexGrow: 1,


    },
    ListItemText:{
fontSize:14,

    }, 
    listItem:{
paddingTop:4,
paddingBottom:4,

    },
    subheader:{
textTransform:'uppercase',

    },
}));


function Home() {
    const classes = useStyles();
    return (

        <div className={classes.root}>

            <AppBar color='inherit'className={classes.AppBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.Menuicons}
                        color="inherit"
                        aria-label="menu" >

                      <MenuIcon />  
                    </IconButton>
                    <img src='/images/preto.png' alt='logo'className={classes.logo}/>
                   <div className={classes.grow}/>
                   <IconButton className={classes.icons} color='inherit'>                       
                      <VideoCallIcon/>  
                    </IconButton>
                    <IconButton className={classes.icons}color='inherit'>
                      <AppsIcon/>  

                    </IconButton><IconButton className={classes.icons} color='inherit'>
                      <MoreVertIcon />  
                    </IconButton>
                    <Button startIcon={<AccountCircle/>}variant='outlined' color='sencondary'>Fazer Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer
            classes={classes.Drawer}
        variant="permanent"
       classes={{
          paper:classes.drawerPaper,
       }}
     >
        <Toolbar />
       <div className={classes.drawerContainer}>
          <List>
          <ListItem button classes={{ root: classes.listItem }}>
          <ListItemIcon>{<HomeIcon/>}</ListItemIcon>
             
                
                <ListItemText 
                classes={{

primary: classes.ListItemText,
                }}
                primary={'Início'} />
                
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
          <ListItemIcon>{<WhatshotIcon/>}</ListItemIcon>
             
                
                <ListItemText 
                classes={{

primary: classes.ListItemText,
                }}
                primary={'Em alta'} />
                
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
          <ListItemIcon>{<SubscriptionsIcon/>}</ListItemIcon>
             
                
                <ListItemText 
                classes={{

primary: classes.ListItemText,
                }}
                primary={'Inscrições'} />
                
              </ListItem>
              
              
              
            
          </List>
          <Divider />
          <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibrary/>
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Biblioteca'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <History/>
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Histórico'}
                  />
                </ListItem>
              </List>
              <Divider />
              <Box p={7}>
                <Typography variant='body2'>
                  Faça login para curtur vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                  <Button
                    variant='outlined'
                    color='secondary'
                    startIcon={<AccountCircle />}
                  >
                    Fazer login
                  </Button>
                </Box>
              </Box>
              <Divider />
              <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                  >
                    O Melhor do youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Música'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Esportes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Jogos'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Filmes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Notícias'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Ao vivo'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Destaques'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Videos 360'}
                  />
                </ListItem>
              </List>
              <Divider />
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Procurar mais'}
                />
              </ListItem>
              <Divider />
            
              </div>
          </Drawer> 
          <Box p={8}>
          <Toolbar />
          <Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 800 }}
          >
            Recomendados
          </Typography>
       </Box>
        </div>

    );
}

export default Home;