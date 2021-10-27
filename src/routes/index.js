import { Switch, Route } from 'react-router-dom';

import Search from '../pages/Search';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Followers from '../pages/Followers';
import Following from '../pages/Following';
import Repos from '../pages/Repos';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/:path/profile/:profile" component={Profile} />
            <Route exact path="/:profile/followers" component={Followers} />
            <Route exact path="/:profile/following" component={Following} />
            <Route exact path="/:profile/repos" component={Repos} />

            {/* <Route path="*" component={Page404} /> */}
        </Switch>
    );
}
