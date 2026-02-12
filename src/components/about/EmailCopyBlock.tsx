"use client";

import { useState, useCallback } from "react";
import { Row, Button, Text, Column, Icon } from "@once-ui-system/core";
import styles from "./about.module.scss";

type EmailCopyBlockProps = {
  email: string;
};

export function EmailCopyBlock({ email }: EmailCopyBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(
    async (e?: React.MouseEvent | React.KeyboardEvent) => {
      e?.preventDefault();
      e?.stopPropagation();
      try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        const range = document.createRange();
        const el = document.getElementById("contact-email-value");
        if (el) {
          range.selectNodeContents(el);
          const sel = window.getSelection();
          sel?.removeAllRanges();
          sel?.addRange(range);
        }
      }
    },
    [email]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCopy(e);
      }
    },
    [handleCopy]
  );

  return (
    <Column
      className={styles.emailBlock}
      gap="12"
      marginTop="24"
      marginBottom="20"
      padding="20"
      tabIndex={0}
      role="button"
      onClick={handleCopy}
      onKeyDown={onKeyDown}
      aria-label={`Copy contact email ${email} to clipboard`}
      title="Click anywhere to copy email"
    >
      <Row gap="8" vertical="center" className={styles.emailBlockHeader}>
        <Icon name="email" size="s" onBackground="brand-weak" />
        <Text variant="body-default-s" onBackground="neutral-weak" className={styles.emailHint}>
          Get in touch — click to copy
        </Text>
      </Row>
      <Row gap="12" vertical="center" horizontal="between" wrap fillWidth>
        <Text
          id="contact-email-value"
          variant="heading-strong-m"
          as="span"
          className={styles.emailValue}
          onBackground="brand-strong"
        >
          {email}
        </Text>
        <Button
          size="m"
          variant="primary"
          prefixIcon={copied ? "check" : "document"}
          label={copied ? "Copied!" : "Copy"}
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            handleCopy(e);
          }}
          aria-hidden
          tabIndex={-1}
        />
      </Row>
    </Column>
  );
}
