import { gql } from '@apollo/client'

export const VERIFY_USERNAME = gql`
	query VerifyUsername($username: String!) {
		verifyUsername(username: $username) {
			status
		}
	}
`

export const VERIFY_EMAIL = gql`
	query VerifyEmail($email: String!) {
		verifyEmail(email: $email) {
			status
		}
	}
`

export const VERIFY_PHONE = gql`
	query VerifyPhone($phone: String!) {
		verifyPhone(phone: $phone) {
			status
		}
	}
`

export const INSERT_USER = gql`
	mutation Signup($name: String!, $email: String!, $phone: String!, $password: String!) {
		signup(name: $name, email: $email, phone: $phone, password: $password) {
			status
			error
			data
		}
	}
`

export const SEND_SMS = gql`
	mutation SendSMS($phone: String!) {
		sendSMS(phone: $phone) {
			status
		}
	}
`

export const VALIDATE_SMS = gql`
	mutation ValidateSMSCode($phone: String!, $code: String!, $action: String!) {
		validateSMSCode(phone: $phone, code: $code, action: $action) {
			status
		}
	}
`

export const LOGIN = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			status
			error
			data {
				id
				username
				fullname
				email
				phone
				two_factor_enabled
				token
			}
		}
	}
`

export const LOGIN_PHONE = gql`
	mutation LoginPhone($phone: String!, $password: String!) {
		loginPhone(phone: $phone, password: $password) {
			status
			error
			data {
				id
				username
				fullname
				email
				phone
				two_factor_enabled
				token
			}
		}
	}
`

export const GOOGLE_LOGIN = gql`
	mutation LoginGoogle(
		$email: String!,
		$name: String!,
		$googleId: String!,
		$givenName: String,
		$familyName: String,
		$photo: String
	) {
		loginGoogle(
			email: $email,
			name: $name,
			googleId: $googleId,
			givenName: $givenName,
			familyName: $familyName,
			photo: $photo
		) {
			error
			status
			data {
				id
				username
				fullname
				email
				phone
				theme
				two_factor_enabled
				token
			}
		}
	}
`

export const APPLE_LOGIN = gql`
	mutation LoginApple(
		$email: String!,
		$appleId: String!,
		$appleToken: String!
	) {
		loginApple(
			email: $email,
			appleId: $appleId,
			appleToken: $appleToken
		) {
			error
			status
			data {
				id
				username
				fullname
				email
				phone
				theme
				two_factor_enabled
				token
			}
		}
	}
`

export const GET_PHONE_BY_EMAIL = gql`
	query GetPhoneByEmail($email: String!) {
		getPhoneByEmail(email: $email) {
			status
			error
			data
		}
	}
`

export const RESET_PASSWORD = gql`
	mutation ResetPassword($phone: String!, $password: String!) {
		resetPassword(phone: $phone, password: $password) {
			status
		}
	}
`

// Authenticated endpoints
export const GET_PROFILE = gql`
	query GetProfile {
		getProfile {
			status
			error
			data {
				app_id
				username
				fullname
				country
				photo
				frame {
					img1
					img2
					img3
					img4
					img5
				}
				gender
				birthday
				age
				balance {
					coins
					points
				}
				people {
					followers
					following
					super_fans
				}
				levels {
					gifter
					streamer
				}
				tasks
				biography
			}
		}
	}
`