'use strict';

const e = React.createElement;

class LikeButton extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return `You liked comment number ${this.props.commentID}`;
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const containers = document.querySelectorAll('.like_button_container');

containers.forEach(container => {
    const commentID = container.getAttribute('data-commentid');
    ReactDOM.render(e(LikeButton, { commentID }), container);
});
