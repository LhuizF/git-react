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
            <Route exact path="/profile/:profile" component={Profile} />
            <Route exact path="/followers/:profile" component={Followers} />
            <Route exact path="/following/:profile" component={Following} />
            <Route exact path="/repos/:profile" component={Repos} />

            {/* <Route path="*" component={Page404} /> */}
        </Switch>
    );
}
