import { useState } from "react"
import {BsPersonFillAdd} from 'react-icons/bs'
import {ImEnter, ImHome} from 'react-icons/im'
import {GiHomeGarage} from 'react-icons/gi'
import {MdEmojiEvents,MdOutlineEmojiEvents,MdEvent} from 'react-icons/md'
import {VscThreeBars} from 'react-icons/vsc';
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Drawer,
} from "@material-tailwind/react";
import { Link } from "react-router-dom"
function Sidebar() {   
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
      <div className='sm:mt-24 mt-6 '>
         <div className="hidden lg:block">
         <Card className="fixed top-4 w-fit h-full  max-w-[20rem] p-4 shadow-2xl  mt-16 bg-blue-gray-300">
              <List className="font-bold text-black pt-10 ">
                <Link to="/">
                  <ListItem>
                    <ListItemPrefix>
                        <ImHome className="h-5 w-5" />
                    </ListItemPrefix>
                    Home
                  </ListItem>
                </Link>
                <Link to='/buyers'>
                  <ListItem>
                    <ListItemPrefix>
                        <MdEmojiEvents className="h-5 w-5" />
                    </ListItemPrefix>
                    Buyers
                  </ListItem>
                </Link>
                <Link to='/sellers'>
                  <ListItem>
                    <ListItemPrefix>
                        <MdOutlineEmojiEvents className="h-5 w-5" />
                    </ListItemPrefix>
                    Sellers
                  </ListItem>
                </Link>
                <Link to='/storages'>
                  <ListItem>
                    <ListItemPrefix>
                        <ImEnter className="h-5 w-5" />
                    </ListItemPrefix>
                    Storages
                    <ListItemSuffix>
                      <Chip value={14} size="sm" variant="ghost" color="white" className="rounded-full" />
                    </ListItemSuffix>
                  </ListItem>
                </Link>
                <Link to='/content'>
                  <ListItem>
                    <ListItemPrefix>
                      <BsPersonFillAdd className="h-5 w-5" />
                    </ListItemPrefix> 
                    Wool Content
                  </ListItem>
                </Link>
                <Link to='/categories'>
                  <ListItem>
                    <ListItemPrefix>
                      <BsPersonFillAdd className="h-5 w-5" />
                    </ListItemPrefix>
                    Wool Categories
                  </ListItem>
                </Link>
                {/* <Link to='/addClub'>
                  <ListItem>
                  <ListItemPrefix>
                      <GiHomeGarage className="h-5 w-5" />
                  </ListItemPrefix>
                  Add Club
                </ListItem>
                </Link>
                <Link to='/addEvent'>
                  <ListItem >
                    <ListItemPrefix>
                        <MdEvent className="h-5 w-5" />
                    </ListItemPrefix>
                    Add Event
                  </ListItem>
                </Link> */}
              
                
              </List>
              </Card>
         </div>
          <div className="lg:hidden block ">
            <div className="flex gap-3 items-center text-brown-900">
              <VscThreeBars onClick={openDrawer} className="ml-5"/>
              <h1 className="font-bold text-2xl ">Demo Board</h1>
            </div>
            <Drawer open={open} onClose={closeDrawer}>
              <Card>
              <List className="font-bold text-black flex flex-col gap-5 ">
              <Link to="/">
                  <ListItem>
                    <ListItemPrefix>
                        <ImHome className="h-5 w-5" />
                    </ListItemPrefix>
                    Home
                  </ListItem>
                </Link>
                <Link to='/Buyers'>
                  <ListItem>
                    <ListItemPrefix>
                        <MdEmojiEvents className="h-5 w-5" />
                    </ListItemPrefix>
                    Buyers
                  </ListItem>
                </Link>
                <Link to='/sellers'>
                  <ListItem>
                    <ListItemPrefix>
                        <MdOutlineEmojiEvents className="h-5 w-5" />
                    </ListItemPrefix>
                    Sellers
                  </ListItem>
                </Link>
                <Link to='/storages'>
                  <ListItem>
                    <ListItemPrefix>
                        <ImEnter className="h-5 w-5" />
                    </ListItemPrefix>
                    Storages
                    <ListItemSuffix>
                      <Chip value={14} size="sm" variant="ghost" color="white" className="rounded-full" />
                    </ListItemSuffix>
                  </ListItem>
                </Link>
                <Link to='/content'>
                  <ListItem>
                    <ListItemPrefix>
                      <BsPersonFillAdd className="h-5 w-5" />
                    </ListItemPrefix> 
                    Wool Content
                  </ListItem>
                </Link>
                <Link to='/categories'>
                  <ListItem>
                    <ListItemPrefix>
                      <BsPersonFillAdd className="h-5 w-5" />
                    </ListItemPrefix>
                    Wool Categories
                  </ListItem>
                </Link>
                {/* <Link to='/addClub'>
                  <ListItem>
                  <ListItemPrefix>
                      <GiHomeGarage className="h-5 w-5" />
                  </ListItemPrefix>
                  Add Club
                </ListItem>
                </Link>
                <Link to='/addEvent'>
                  <ListItem >
                    <ListItemPrefix>
                        <MdEvent className="h-5 w-5" />
                    </ListItemPrefix>
                    Add Event
                  </ListItem>
                </Link> */}
              </List>
              </Card>
            </Drawer>
          </div>
      </div>
  )
}

export default Sidebar;