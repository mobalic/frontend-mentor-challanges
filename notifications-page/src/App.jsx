import React, { useState } from 'react';
import { DATA } from './utils';
import styles from './App.module.css';
import classnames from 'classnames';

function Card(props) {
  const cx = classnames(styles.card, { [styles.unread]: !props.read });
  return (
    <li onClick={props.onClickCard} className={cx}>
      <img className={styles.avatarImg} src={props.img} alt={props.img_alt} />
      <div className={styles.notificationAction}>
        <p className={styles.defaultAction}>
          {'  '}
          <a href={props.user_url}>
            <strong className={styles.username}>{props.username}</strong>
          </a>{' '}
          <span> {props.default_action}</span>
          {'  '}
          <a href={props.suffix_action_url}>
            <strong>{props.suffix_action}</strong>
          </a>
        </p>

        <div className={styles.date}>{props.date}</div>
        {props.read && props.message && (
          <p className={styles.message}>{props.message}</p>
        )}
      </div>
      {props.action_src && (
        <img
          className={styles.actionSrcImg}
          src={props.action_src}
          alt={props.action_src_alt}
        />
      )}
    </li>
  );
}

function Button({ onAllAsReadClick }) {
  return <button onClick={onAllAsReadClick}>Mark all as read</button>;
}

export default function App() {
  const [notifications, setNotifications] = useState(DATA);

  function getUnRead() {
    return notifications.filter((notif) => notif.read === false);
  }

  const status = getUnRead().length;

  function handleOnClickCard(i) {
    const newNotifs = [...notifications];
    newNotifs[i] = { ...newNotifs[i], read: !newNotifs[i].read };
    setNotifications(newNotifs);
  }

  function handleAllAsRead() {
    const newNotifs = [...notifications];
    newNotifs.map((notif) => (notif.read = true));
    setNotifications(newNotifs);
  }

  const notificationList = notifications.map((notif, index) => {
    return (
      <Card
        key={notif.id}
        {...notif}
        onClickCard={() => handleOnClickCard(index)}
      />
    );
  });

  return (
    <div className={styles.app}>
      <header>
        <div className={styles.status}>
          <h2>Notifications</h2>

          <span>{status}</span>
        </div>
        <button
          id="theme-toggle"
          title="Toggles light & dark"
          aria-live="polite"
          onClick={() => {
            // Set the theme value here to resolve the issue with Chrome on Android.
            theme.value = theme.value === 'light' ? 'dark' : 'light';
            setPreference();
          }}
        >
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
            <mask id="moon">
              <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
              <circle cx="40" cy="8" r="11" fill="black"></circle>
            </mask>
            <circle id="sun" cx="12" cy="12" r="11" mask="url(#moon)"></circle>
            <g id="sun-beams">
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </g>
          </svg>
        </button>
        <Button onAllAsReadClick={handleAllAsRead} />
      </header>

      <ul className={styles.notificationList}>{notificationList}</ul>
    </div>
  );
}
