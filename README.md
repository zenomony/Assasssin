# Assassin Referee

## Overview

Assassin Referee is a web-based Progressive Web Application (PWA) that automates game management for the game Assassin.

Traditionally, players must report eliminations to a referee, who verifies the kill and assigns new targets. Assassin Referee replaces the referee by managing player identities, target assignments, eliminations, and game progression automatically.

The core gameplay loop is:

1. A player receives a target.
2. The player eliminates their target in the real world according to the game rules.
3. The player scans the target's QR code.
4. The system verifies the elimination.
5. The system automatically assigns the player's next target.

The goal is to provide a lightweight, self-service platform that can run Assassin games with little or no referee involvement.

---

# MVP Goals

The initial version should support:

* User registration and login
* Creating games
* Joining games
* Inviting players
* Viewing current target
* Displaying a personal QR code
* Scanning another player's QR code
* Automatic elimination processing
* Automatic target reassignment
* Viewing game standings

The MVP should be capable of running a real Assassin game with multiple players.

---

# Technology Stack

## Frontend

* React
* TypeScript
* Progressive Web App (PWA)

## Backend

* ASP.NET Core Web API

## Database

* SQLite (development)
* PostgreSQL (future)

## Authentication

* Email and password

## QR Code Features

* QR code generation
* Camera-based QR code scanning

---

# Core Concepts

## User

A permanent account within the system.

A user may participate in multiple games.

Attributes:

* User ID
* Username
* Email
* Password Hash

Each user has a permanent QR code tied to their account.

---

## Game

An Assassin game created by a player.

Attributes:

* Game ID
* Name
* Status
* Creator

Game statuses:

* Draft
* Recruiting
* Active
* Completed
* Archived

---

## Game Player

Represents a user's participation in a specific game.

Attributes:

* User ID
* Game ID
* Alive/Dead Status
* Current Target

---

## Elimination

Represents a successful kill within a game.

Attributes:

* Killer
* Victim
* Game
* Timestamp

All eliminations should be recorded for auditing, statistics, and dispute resolution.

---

# Invitations

The system will support two invitation methods.

## Username Search

Players can search for and invite users by username.

## Join Link

Players can join using a unique game invitation link.

Example:

/join/ABC123

---

# QR Code Design

Each user has a permanent QR code.

The QR code identifies the user, not the game.

When a player scans a QR code:

1. The current game provides context.
2. The scanned QR identifies the target.
3. The server validates the kill.

Example validation:

* Is the game active?
* Is the killer alive?
* Is the victim alive?
* Is the victim the killer's assigned target?

If all checks pass, the elimination is processed.

---

# Primary Screens

## Authentication

* Login
* Register

## Home

* Current Games
* My Code
* Create Game

## Game Details

* Game information
* Player list
* Current target
* Scan target button

## My Code

* Display user's QR code

## Scan Target

* Camera scanner
* Kill confirmation

---

# Future Features

These are intentionally out of scope for MVP.

* Push notifications
* Advertisements
* Premium accounts
* In-app purchases
* Profile pictures
* Chat system
* Team game modes
* GPS/location features
* Tournament support
* Advanced statistics
* Public game discovery

---

# Definition of Success

Version 1.0 is considered successful when:

1. A player can create a game.
2. Other players can join.
3. Targets can be assigned.
4. Eliminations can be performed via QR scan.
5. New targets are automatically assigned.
6. A complete Assassin game can be run without referee intervention.

