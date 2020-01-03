import React, { Component } from 'react';

import { ButtonToolbar, Button } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <ButtonToolbar>
                <Button variant="primary">Primary</Button>
            </ButtonToolbar>
        );
    }
}

export default Header;