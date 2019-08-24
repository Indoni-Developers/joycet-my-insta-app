import React from 'react';
import ProfileImage from '../components/ProfileImage';
import PostGrid from '../components/PostGrid'
import ProfileBio from '../components/ProfileBio';

class ProfilePage extends React.Component{
    render(){
        return (
            <div>
                <ProfileImage />
                <ProfileBio />
                <PostGrid />
            </div>          
        )
    }
}

export default ProfilePage;
