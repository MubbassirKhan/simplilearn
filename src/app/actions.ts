'use server'

interface RSVPFormData {
  email: string;
}

interface RSVPResponse {
  success: boolean;
  message: string;
}

export async function submitRSVP(formData: FormData): Promise<RSVPResponse> {
  const email = formData.get('email') as string;
  
  // Validate email
  if (!email || !email.includes('@')) {
    return {
      success: false,
      message: 'Please enter a valid work email address.',
    };
  }

  // Validate it's a work email (not personal email domains)
  const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com'];
  const emailDomain = email.split('@')[1]?.toLowerCase();
  
  if (personalDomains.includes(emailDomain)) {
    return {
      success: false,
      message: 'Please use your work email address.',
    };
  }

  try {
    // Airtable API configuration
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'RSVPs';

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error('Airtable configuration missing');
      // In development, return success for testing
      if (process.env.NODE_ENV === 'development') {
        console.log('Development mode: RSVP simulated for', email);
        return {
          success: true,
          message: 'Thank you! Your RSVP has been received. We will be in touch shortly.',
        };
      }
      return {
        success: false,
        message: 'Server configuration error. Please try again later.',
      };
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Email: email,
                'RSVP Date': new Date().toISOString(),
                'Event': 'Dallas Round Table - Feb 20, 2026',
                'Status': 'Pending',
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable error:', errorData);
      return {
        success: false,
        message: 'Failed to submit RSVP. Please try again.',
      };
    }

    return {
      success: true,
      message: 'Thank you! Your RSVP has been received. We will be in touch shortly.',
    };
  } catch (error) {
    console.error('RSVP submission error:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.',
    };
  }
}
