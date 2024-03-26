import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { DateTime } from 'luxon';

type TimeAgoProps = {
  timestamp: string;
};


export const clipSentence = (str: string, wordAmout: number, fromFront?: boolean): string => {
    if(str.length > wordAmout) {
        fromFront ? str =  '**** **** ****' + str.slice(-wordAmout) : str = str.substring(0, wordAmout) + '...'
    };
    return str;
};

export const getCurrentDate = (): string => {
    const timestamp = Date.now();
    const date = new Date(timestamp);

    const year = date.getFullYear();
    // const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const monthAbbreviation = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
    const day = ('0' + date.getDate()).slice(-2);

    const currentDate = `${day} ${monthAbbreviation} ${year}`;
    return currentDate;
}

export const getCurrentTime = (): string => {
    const timestamp = Date.now();
    const date = new Date(timestamp);

    const hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const meridiem = hours >= 12 ? 'PM' : 'AM';

    let formattedHours: number | string = hours % 12 || 12;
    formattedHours = ('0' + formattedHours).slice(-2);

    const formattedTime = `${formattedHours}:${minutes} ${meridiem}`;
    return formattedTime;
}

export const getGreeting = (): string => {
    const timestamp = Date.now();
    const date = new Date(timestamp);

    const hours = date.getHours();
    let greeting: string;

    if (hours < 12) {
        greeting = 'Good Morning';
    } else if (hours < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    return greeting;
}



export const TimeAgo: React.FC<TimeAgoProps> = ({ timestamp }) => {
  const [timeAgo, setTimeAgo] = useState<string>("");

  useEffect(() => {
    const calculateTimeAgo = (timestamp: string): string => {
      const currentDate = new Date();
      const date = new Date(timestamp);

      const timeDifference = currentDate.getTime() - date.getTime();
      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days > 0) {
        return `${days} ${days === 1 ? "day" : "days"} ago`;
      } else if (hours > 0) {
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
      } else if (minutes > 0) {
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
      } else {
        return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
      }
    };

    setTimeAgo(calculateTimeAgo(timestamp));
  }, [timestamp]);

  return <span>{timeAgo}</span>;
};


export const checkExtension = (str: string): string => {
  return str.slice(str.lastIndexOf("."))
}

export const generateRandomNumber = (): number =>  {
  return Math.floor(Math.random() * 100000);
}


export const getDateTime = (apiDate: string | Date): string => {
  // const apiDate = '2023-10-27T13:26';
  const date = new Date(apiDate);

  const formattedDate = format(date, 'EEE MMM dd yyyy HH:mm:ss');

  return formattedDate; 
}

// export const generateDateTime = (timestamp: string): string => {
//   return DateTime.fromISO(timestamp as string).toLocaleString(DateTime.DATE_MED)
// }


export const generateDateTime = (timestamp: string): string => {
  const dateTime = DateTime.fromISO(timestamp as string);
  
  // Format both date and time
  const formattedDateTime = dateTime.toLocaleString({
    ...DateTime.DATE_MED,
    ...DateTime.TIME_SIMPLE
  });

  return formattedDateTime;
}




export const capitalize = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase()
}


// 'use client'

// import './styles/notification.scss'
// import { motion } from 'framer-motion'
// import { usePanelContext } from '../../hooks/useAppContext';
// import * as Tabs from '@radix-ui/react-tabs';
// import React, { useState } from 'react';
// import TimeAgo from './TimeAgo';

// const NotificationContent: React.FC<{notification: any}> = ({notification}: any) => {
//     return (
//         <div className="notifications-container">
//             <div className="n-icon">
//                 <svg width="42" height="42" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <circle cx="19" cy="19" r="19" fill="#E4E8FB"/>
//                     <path d="M16 24V25C16 25.394 16.0776 25.7841 16.2284 26.1481C16.3791 26.512 16.6001 26.8427 16.8787 27.1213C17.1573 27.3999 17.488 27.6209 17.8519 27.7716C18.2159 27.9224 18.606 28 19 28C19.394 28 19.7841 27.9224 20.1481 27.7716C20.512 27.6209 20.8427 27.3999 21.1213 27.1213C21.3999 26.8427 21.6209 26.512 21.7716 26.1481C21.9224 25.7841 22 25.394 22 25V24M25 16C25 19 27 24 27 24H11C11 24 13 20 13 16C13 12.732 15.732 10 19 10C22.268 10 25 12.732 25 16Z" stroke="#5870C0" stroke-linecap="round" stroke-linejoin="round"/>
//                 </svg>
                
//             </div>
//             <div className='n-details'>
//                 <p className='n-content'>{notification?.content?.slice(0, 50)}</p>
//                 <span className='n-time'>
//                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7 4.33333V7L8.33333 8.33333M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" stroke="#8B8B8B" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg> {<TimeAgo timestamp={notification?.createdAt}/>}</span>
//             </div>
//         </div>
//     )
// }


// const Notification = () => {

//     const { isOpen, newNotifications, setNewNotifications } = usePanelContext();
//     const [activeTab, setActiveTab] = useState('all');

//   const handleTabChange = (value: any) => {
//     setActiveTab(value);
//   };

//     const sidePanelVariants = {
//         open: {
//             x: '0%',
//             transition: {
//                 duration: 0.5,
//                 ease: 'easeOut',
//             },
//         },
//         closed: {
//             x: '100%',
//             transition: {
//                 duration: 0.3,
//                 ease: 'easeIn',
//             },
//         },
//     };

//     const tabData = [
//         { label: 'All', value: 'all' },
//         { label: 'Task', value: 'task' },
//         { label: 'Reminders', value: 'reminders' },
//     ];

//     return (
//         <motion.div
//             className="notification-panel"
//             variants={sidePanelVariants}
//             initial="closed"
//             animate={isOpen ? 'open' : 'closed'}
//         >
//             <Tabs.Root defaultValue='all' className='TabsRoot'>
//                 <div className="heading">
//                     <div className="title">
//                         <h1>Your Notifications</h1>
//                         {newNotifications && newNotifications?.total ? <div className="new">{newNotifications?.total > 20 ? `${newNotifications?.total}+` : newNotifications?.total} New</div> : null}
//                     </div>
//                     <Tabs.List className='TabsList'>
//                         {tabData.map((tab) => (
//                             <Tabs.Trigger key={tab.value} className='TabsTrigger' value={tab.value} onClick={() => handleTabChange(tab.value)}>
//                                 {tab.label}
//                             </Tabs.Trigger>
//                         ))}
//                     </Tabs.List>
//                 </div>
//                 <Tabs.Content className='TabsContent' value={`${activeTab}`}>
//                     {newNotifications?.data?.filter((notification: any) => {
//                         if(activeTab === 'all') {
//                             return true;
//                         } else if (activeTab === 'task' && notification?.role === 'task') {
//                             return true;
//                         } else if (activeTab === 'reminders' && notification?.role === 'reminder') {
//                             return true;
//                         }

//                         return false;
//                     }).sort((a: any, b: any) => a.status === 'unread' ? -1 : 1).map((notification: any) => (
//                         <NotificationContent notification={notification} key={notification?._id} />
//                     ))}

//                     {/*  */}
//                     <div className="line-text">
//                         <div className="text">Previous Notification</div>
//                     </div>
//                     {/*  */}

//                     {newNotifications?.data?.filter((notification: any) => {
//                         if(activeTab === 'all') {
//                             return true;
//                         } else if (activeTab === 'task' && notification?.role === 'task') {
//                             return true;
//                         } else if (activeTab === 'reminders' && notification?.role === 'reminder') {
//                             return true;
//                         }

//                         return false;
//                     }).sort((a: any, b: any) => a.status === 'read' ? 1 : -1).map((notification: any) => (
//                         <NotificationContent notification={notification} key={notification?._id}/>
//                     ))}

//                     {/* Display a message if notifications are not available */}
//                     {newNotifications?.data?.filter((notification: any) => {
//                             if (activeTab === 'all' && notification.role) {
//                                 return true;
//                             } else if (activeTab === 'task' && notification.role === 'task') {
//                                 return true;
//                             } else if (activeTab === 'reminders' && notification.role === 'reminder') {
//                                 return true;
//                             }
//                             return false;
//                         })
//                         .length === 0 ? (
//                         <p>No notifications for {activeTab.toUpperCase()}</p>
//                     ): null}
//                 </Tabs.Content>
//             </Tabs.Root>
//         </motion.div>
//     );
// }

// export default Notification;