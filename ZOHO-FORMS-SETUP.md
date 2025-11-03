# Zoho Forms Integration Guide

## What's Been Implemented

✅ **Required field validation** - All form fields (name, email, subject, level, message, disclaimer) now have HTML5 `required` attributes
✅ **Disabled placeholder options** - "Please select..." options are now disabled to force valid selection
✅ **Professional thank-you page** - Clean, minimalist confirmation page at `/thank-you`
✅ **Consistent aesthetic** - Matches your site's professional, minimalist design

## Next Steps: Connecting Zoho Forms

### 1. Create Your Zoho Form

1. Log into [Zoho Forms](https://www.zoho.com/forms/)
2. Create a new form with these exact fields:
   - **Name** (text field)
   - **Email** (email field)
   - **Subject** (dropdown: Mathematics, Further Mathematics, Physics, Other)
   - **Level** (dropdown: GCSE, A-Level, University Admissions, Undergraduate, Graduate, Other)
   - **Message** (paragraph/long text field)
   - **Disclaimer** (checkbox)

### 2. Add reCAPTCHA Protection (Recommended: v3)

**Why v3?** It's invisible, no user interaction required, just works in the background.

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "+" to register a new site
3. Choose **reCAPTCHA v3**
4. Add these domains:
   - `danieljsmith.org`
   - `forms.zoho.com`
   - `forms.zohopublic.com`
5. Copy your **Site Key** and **Secret Key**
6. In Zoho Forms: **Settings** → **Spam Control** → **CAPTCHA** → **Google reCAPTCHA**
7. Select v3, paste your keys
8. Set threshold to 0.5 (default)

### 3. Configure Form Settings in Zoho

**Email Notifications:**
- **Settings** → **Emails & Notifications**
- Set notification email to: `tuition@danieljsmith.org`
- Enable "Send email on form submission"
- Optionally: Enable auto-responder to send confirmation to user's email

**Success Action (CRITICAL):**
- **Settings** → **Success Actions**
- Choose **"Redirect to URL"**
- Enter: `https://danieljsmith.org/thank-you`
- This ensures users see your professional thank-you page

### 4. Embed the Form

**Option A: Inline Embed (Recommended)**
1. In Zoho Forms, click **Share** → **Embed**
2. Choose **Inline Embed**
3. Copy the iframe code
4. Replace the `<ContactUs>` component in `src/pages/contact.astro` with the iframe
5. Style the iframe to match your site

**Option B: Popup/Modal**
- Uses Zoho's popup script
- Less seamless but easier setup

## Form Field Reference

Your current form structure sends these field names:
- `name` - User's full name
- `email` - User's email address  
- `subject` - Mathematics/Further Mathematics/Physics/Other
- `level` - GCSE/A-Level/University Admissions/etc.
- `message` - User's message
- `disclaimer` - Checkbox confirmation

Make sure Zoho form field names match these exactly for seamless integration.

## Testing Checklist

- [ ] Submit form with all fields filled → should redirect to /thank-you
- [ ] Try submitting empty form → should show browser validation errors
- [ ] Try submitting with invalid email → should show error
- [ ] Try submitting without selecting dropdowns → should show error
- [ ] Try submitting without checking disclaimer → should show error
- [ ] Verify you receive email at tuition@danieljsmith.org
- [ ] Verify user receives auto-response (if enabled)

## Troubleshooting

**Form not redirecting to thank-you page?**
- Check Success Actions in Zoho are set to redirect
- Verify URL is exactly: `https://danieljsmith.org/thank-you`

**Not receiving emails?**
- Check spam folder
- Verify notification email in Zoho settings
- Check Zoho Forms dashboard for submissions

**Validation not working?**
- This is handled by browser natively (HTML5)
- Should work in all modern browsers
- No JavaScript required

## Cost Summary

- **Google reCAPTCHA:** FREE (unlimited for your use case)
- **Zoho Forms:** FREE tier includes 100 submissions/month, 1 user
- **Total:** $0/month

## Support

If you need help with Zoho Forms setup:
- [Zoho Forms Documentation](https://help.zoho.com/portal/en/kb/forms)
- [Zoho reCAPTCHA Guide](https://help.zoho.com/portal/en/kb/forms/form-settings/privacy-features/captcha/articles/google-recaptcha)

