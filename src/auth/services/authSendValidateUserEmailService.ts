import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import { logger } from '../../logger';
import { MESSAGE_ERROR_SEND_CODE_EMAIL } from '../../constants';

export const authSendValidateUserEmailService = async (emailTo: string, codeSend: number) => {
  const messageSend = 'Para completar el registro, ingrese el siguiente código:';
  const messageWelcome = `Hola ${emailTo},`;
  const bodyHtml = `
                    <div style="
                    align-items: center;
                    margin: 2em;
                    border-radius: 1em;
                    color: black;
                    padding: 1em;">
                        <h3 style="
                        font-weight: bold;
                        margin-bottom: 0;
                        color: #4CAF5D;">MiEcommerce</h3>

                        <p style="align-self: flex-start;margin-bottom: 0;">${messageWelcome}</p>
                        <p style="align-self: flex-start;margin-bottom: 0;">${messageSend}</p>

                        <h2>${codeSend}</h2>
                    </div>
                    `;

  let transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      requireTLS: true,
      secure: true,
      auth: { user: process.env.SENDER_EMAIL, pass: process.env.SENDER_PASSWORD },
    })
  );

  const mailOptions = {
    from: `MiEcommerce.App <${process.env.SENDER_EMAIL}>`,
    to: emailTo,
    subject: `Su clave es ${codeSend}`,
    html: bodyHtml,
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    return response;
  } catch (error: any) {
    logger.error('Error creating user account', {
      instance: 'services',
      fn: 'authSendValidateUserEmailService',
      trace: error.message,
    });
    throw new Error(MESSAGE_ERROR_SEND_CODE_EMAIL);
  }
};
