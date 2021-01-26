<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '6+8U/Aj156NFbUE/3IYah6XWy+cmDqgLxBp/HlGgWBPsuKZaw+LCDr4+x/BO/Q1yyErdDQKttE0VjGa2hSjutA==');
define('SECURE_AUTH_KEY',  'DTotSF1pJ+IHeW5kv9tTGriJTnB1Nwv4JcF1GQx8ZU6rB6rFvCKdit7RxndSncF5O9y8tZ7CzFhZPBnWZ7F+EQ==');
define('LOGGED_IN_KEY',    '508QWZi0SlQ94/ar76PSdJOZ9e/F4rylxFsIFESDTFj97kKEIWXpx5AVKW2Q2v2vFuCkTmxQa0fE1bQT8qapmQ==');
define('NONCE_KEY',        'gA8oaulSDN0tqHYTvykRcHkdyh7+AeD7X0IWGYzJqN81LOqh/9ANj1DlB7aVu6LzReo7MHkJJxK8wwqEMErZrA==');
define('AUTH_SALT',        '8FtuB8oLw6SselAxhSg1yTHS0htfCszagZjmu2LTTo08X0W1PlNtr3OULOI9n7eHfihTa6AFk04w+/9+jMYZJQ==');
define('SECURE_AUTH_SALT', 'di0fF7zVKOg4raI4nN6TUqCwyKzl+FyRcvKA8wnHQ63ZZavm5lzHpqjYpNz+NOkVuX/GDA/RqMlN7qTSoQRAnw==');
define('LOGGED_IN_SALT',   'BiK4DII356DHXnSFvztSvI3p14L/deqxvLeMqJRQDdgBkKy2XQuYBL+VHscvdblnl0+UCQFgiuH7A5KR+6iCRQ==');
define('NONCE_SALT',       '9T/sAppp5VNjP3FrwA1n1279EjmbDO/DSyaSlkqxme+u/KSkLzU/FqPA7ObkjEgBvlyUYwubV/RH7Pbq7+tG8w==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
