import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import Sidebar from "../components/sidebar";
   
function Storages() {
    const data=[
        {
            id:1,
            image:"https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            place:"Guntur",
            desc:"Available you can store 20kwinta of wool."
        },
        {
            id:2,
            image:"https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            place:"Guntur",
            desc:"Available you can store 20kwinta of wool."
        },
        {
            id:3,
            image:"https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            place:"Guntur",
            desc:"Available you can store 20kwinta of wool."
        },
        {
            id:4,
            image:"https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            place:"Guntur",
            desc:"Available you can store 20kwinta of wool."
        },
    ]
    return (
        <div>
            <Sidebar/>
            <div className="lg:ml-72 mt-32 gap-10 flex flex-wrap">
                {data.map((item)=>(
                    <Card className="mt-6 w-96" key={item.id}>
                        <CardHeader color="blue-gray" className="relative h-56">
                        <img
                            src={item.image}
                            alt="card-image"
                        />
                        </CardHeader>
                        <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {item.place}
                        </Typography>
                        <Typography>
                            {item.desc}
                        </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                        <Button>Book Now</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
  }
  export default Storages;