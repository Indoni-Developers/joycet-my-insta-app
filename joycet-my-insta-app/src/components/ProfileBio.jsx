import React from 'react';

class ProfileBio extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: "Joyce",
            followers: 0

        }
    }
    addFollower = () =>{
        this.state({
            followers: this.state.folowers + 1
        });
    }


    render () {
        return (
            <div>
                <div className="ProfileBioContainer">
                <div className="ProfileBioName">
                {this.state.name}
                <button onClick={this.addFollower}>Follow</button>

                <div>
                    <div className="ProfileFollower">
                        {this.state.followers}
                    </div>

                </div>
                </div>
            </div>
            </div>
        )

    }
}

export default ProfileBio;