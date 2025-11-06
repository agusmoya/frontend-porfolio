import { useId, useState } from 'react'

import clsx from 'clsx'

import type { InputProps } from './inputType'

import styles from './Input.module.css'

export const Input = ({
  className = '',
  id,
  name,
  type,
  label,
  value,
  placeholder = '',
  autoComplete = 'off',
  hint,
  error,
  touched,
  required,
  disabled,
  step,
  min,
  max,
  initialStateIcon: InitialStateIcon,
  finalStateIcon: FinalStateIcon,
  withFeedback = true,
  onChange,
  onBlur,
  ...rest
}: InputProps) => {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const errorId = `${inputId}-error`
  const hintId = `${inputId}-hint`
  const hasError = touched && !!error
  const describedBy =
    [hasError && errorId, hint && !hasError && hintId].filter(Boolean).join(' ') ||
    undefined
  const [stateInput, setStateInput] = useState(false)

  const handleClick = () => {
    setStateInput((prevState) => !prevState)
  }

  return (
    <div className="input">
      <div className={`${styles.inputWrapper}`}>
        <input
          className={clsx(
            className,
            styles.inputField,
            hasError && styles.inputFieldError,
            disabled && styles.inputFieldDisabled
          )}
          id={inputId}
          name={name}
          type={type === 'password' && stateInput ? 'text' : type}
          value={value}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          step={step}
          min={min}
          max={max}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={hasError}
          aria-describedby={describedBy}
          {...rest}
        />
        <label
          htmlFor={inputId}
          className={clsx(
            `${styles.inputLabel}`,
            disabled && `${styles.inputLabelDisabled}`
          )}
        >
          {label}
        </label>
        {
          /* For common input */
          !InitialStateIcon && FinalStateIcon && (
            <FinalStateIcon className={styles.inputIcon} tabIndex={-1} />
          )
        }
        {
          /* For password type input */
          type === 'password' && InitialStateIcon && FinalStateIcon && (
            <button
              type="button"
              className={styles.inputButton}
              onClick={handleClick}
              tabIndex={-1}
            >
              {stateInput ? <InitialStateIcon /> : <FinalStateIcon />}
            </button>
          )
        }
      </div>
      {withFeedback && (
        <div className={styles.inputFeedback}>
          {hasError && (
            <span id={errorId} className={styles.inputErrorMessage} role="alert">
              {error}
            </span>
          )}
          {hint && (
            <span id={hintId} className={styles.inputHint}>
              {`Eg: ${hint}`}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
