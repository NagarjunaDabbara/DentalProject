import React,{useState,useEffect} from "react";
import axios from 'axios';
import Table from './table';

const Location = () => {
    const [bname, setbname] = useState('');
    const [address, setaddress] = useState('');
    const [address2, setaddress2] = useState('');
    const [phone, setphone] = useState('');
    const [fax, setfax] = useState('');
    const [restdata, setrestdata] = useState([])
    useEffect(async() => {
        try {
        if(document.location.pathname.split('/').length>1 && document.location.pathname.split('/')[2] !=""){
        var path=document.location.pathname.split('/')[2]
        
    await axios.get("http://127.0.0.1:5000/makejson?name="+path).then((res) => {
            var name=Object.keys(res.data.data)[0]
            setbname(name);
            setaddress(res.data.data[name][0]['address1'])
            setaddress2(res.data.data[name][0]['address2'])
            setfax(res.data.data[name][0]['fax'])
            setphone(res.data.data[name][0]['phone'])
            setrestdata(res.data.data[name])
            console.log(res.data.data);
    });
        }else{
            document.location='/';
        }}
        catch {
document.location='/';
        }
    }, []);
  return (
    <div className="mt-10 flex flex-col w-screen  mx-4 ">
   <div class="mb-4 " style={{   
  "width": "100%",
  "height": "4px",
  "padding": "15px",
  "background-color": "white",
  "box-shadow": "0 5px" }} />
      <div className="text-4xl font-bold text-blue-400 text-left ml-5">
        Service Location Details
      </div>
      <div className=" mt-5 ml-6 flex justify-between">
        <div className="text-2xl font-bold ml-10 text-left">
          Business Name : {bname}
        </div>
        <div className="mr-10">
          <i class="fas fa-times-circle"></i>
        </div>
      </div>
      <hr class="mx-10 mt-2" style={{ "border-top": "3px solid #bbb" }} />
      <div class="flex justify-end mr-10 gap-5 mt-2">
        <div class=" py-2 px-4">{phone}</div>
        <div className="mt-2 -ml-5"><i class="far fa-edit"></i></div>
        <button class="bg-green-700 hover:bg-blue-dark text-white font-bold py-2 px-6 rounded">
          Call
        </button>
        <button class="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-8 rounded">
          Listen To Recorded Call
        </button>
        <div class="mt-2">
        <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div className="flex  mr-10 mt-5 bg-blue-100 mx-6 justify-between">
        <div className="py-2 text-black pl-4 pt-4 font-semibold">
          Service Location Details
        </div>
        <div className="py-2 mr-5">
          <button class="bg-blue-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
        </div>
      </div>
      <div className="container mx-6 text-left mt-2 text-md">
        <div>
          <div className="pl-5 text-sm ">Buisness Name</div>
          <div className="pl-6 mt-1 text-md">{bname}</div>
        </div>
        <div className="mt-6">
          <div className="pl-5 text-sm ">Service Location Address</div>
          <div className="pl-6 mt-1 text-md">{address} <br/>{address2}</div>
        </div>
        <div className="flex flex-row gap-20">
        <div className="mt-8">
          <div className="pl-5 text-sm ">Service Location Phone</div>
          <div className="pl-6 mt-1 text-md">{phone}<br/></div>
        </div>
        <div className="mt-8">
          <div className="pl-5 text-sm ">Service Fax Phone</div>
          <div className="pl-6 mt-1 text-md">{fax}<br/></div>
        </div>
        </div>
      </div>
      <div className="flex  mr-10 mt-2 bg-blue-100 mx-6 justify-between">
        <div className="py-2 text-black pl-4 pt-4 font-semibold">
          Provider Details
        </div>
        <div className="py-2 mr-5">
          <button class="bg-blue-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
            Add Provider
          </button>
        </div>
      </div>
      <Table restdata={restdata} />
    </div>
  );
};

export default Location;
