import React, { Component } from 'react';
import { Button } from '@icedesign/base';
import { Link } from 'react-router-dom';

export default class IntroWithBackground extends Component {
  static displayName = 'IntroWithBackground';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.inntroContent}>
          <h3 style={styles.title}>Team</h3>
          <div style={styles.titleLine}>
            <div style={styles.titleHighlightLine} />
          </div>
          <p style={styles.desc}>
          Neural Text Matching Community is backed by a group of researchers, engineers and students. We
          </p>
          <Link to="">
            <Button style={styles.extraButton}>Learn more &gt;</Button>
          </Link>
        </div>
        <div style={styles.background}>
          <div style={styles.grayOverlay} />
          <div style={styles.backgroundImage} />
        </div>
        <div style={styles.topClipTriange} />
        <div style={styles.bottomClipTriange} />
      </div>
    );
  }
}

const styles = {
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    height: '750px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-100px',
  },
  inntroContent: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#fff',
    width: '466px',
  },
  titleLine: {
    width: '140px',
    height: '2px',
    marginTop: '17px',
    background: '#FFFFFF',
    borderLeft: '2px solid ##5fb2f8',
  },
  titleHighlightLine: {
    background: '#3080FE',
    height: '2px',
    width: '33px',
  },
  title: {
    fontSize: '36px',
  },
  desc: {
    fontSize: '16px',
    lineHeight: 1.5,
    marginTop: '34px',
    textAlign: 'center',
  },
  extraButton: {
    marginTop: '85px',
    borderColor: '#fff',
    background: 'transparent',
    color: '#fff',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: '#ccc',
  },
  grayOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.76)',
    zIndex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundImage:
      `url(${require('./images/TB18Na6iHSYBuNjSspiXXXNzpXa-3800-2026.jpg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  topClipTriange: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    background: '#fff',
    height: '150px',
    zIndex: 1,
    clipPath: 'polygon(0 0, 0 100%, 100% 0)',
  },
  bottomClipTriange: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#fff',
    height: '150px',
    zIndex: 1,
    clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)',
  },
};
