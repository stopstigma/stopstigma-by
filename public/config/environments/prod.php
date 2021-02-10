<?php
/**
 * Configuration overrides for WP_ENV === 'prod'
 */

use Roots\WPConfig\Config;


// ****************************************************************
// Development settings
Config::define( 'SAVEQUERIES', false );
Config::define( 'WP_DEBUG', false );
Config::define( 'WP_DEBUG_LOG', true );
Config::define( 'WP_DEBUG_DISPLAY', false );
Config::define( 'WP_DISABLE_FATAL_ERROR_HANDLER', false );
Config::define( 'SCRIPT_DEBUG', false );
Config::define( 'WP_CACHE', true );

// ****************************************************************
// Wordpress settings
Config::define( 'WP_POST_REVISIONS', 5 );
Config::define( 'WP_TURN_OFF_ADMIN_BAR', false );
Config::define( 'WPLANG', '' );

// Enable plugin and theme updates and installation from the admin
Config::define( 'WP_AUTO_UPDATE_CORE', false );
Config::define( 'DISALLOW_FILE_MODS', false );
Config::define( 'DISALLOW_FILE_EDIT', false );
Config::define( 'DISABLE_WP_CRON', false );
