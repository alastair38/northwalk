import { asText } from '@prismicio/client';
import * as prismic from '@prismicio/client';
import { createClient } from '$lib/prismicio';
import { Resend } from 'resend';

const resend = new Resend('re_UZQ1pwRp_9XuL17t56rdhgtfzHWXaCm97');

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getByUID('page', params.uid);

	return {
		page,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image
	};
}

// export const actions = {
// 	email: async ({ request }) => {
// 		const formData = await request.formData();
// 		const email = formData.get('email');
// 		const message = formData.get('message');
// 		// this will be 'on' or null
// 		const remember = formData.get('remember');

// 		try {
// 			resend.emails.send({
// 				from: 'onboarding@resend.dev',
// 				to: 'alastair@alastaircox.com',
// 				replyTo: 'alastair@alastaircox.com',
// 				subject: `Website enquiry from ${email}`,
// 				html: ` <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin:0 auto;padding:20px 0 48px">
//       <tbody>
//         <tr style="width:100%">
//           <td>

//             <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:24px;border:solid 1px #dedede;border-radius:5px;">
//               <tbody>
//                 <tr>
//                   <td>
//                   <p style="font-size:16px;line-height:1.25;margin:16px 0"><strong>Sender: </strong>${email}</p>
//                     <p style="font-size:16px;line-height:24px;margin:0 0 10px 0;text-align:left"><strong>Message: </strong>${message}</p>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//           </td>
//         </tr>
//       </tbody>
//     </table><!--/$-->`
// 			});
// 		} catch (error) {}

// 		// Process the form data and perform actions
// 		return { success: true, email, message };
// 	},

// 	search: async ({ request }) => {
// 		const formData = await request.formData();
// 		const search = formData.get('search');

// 		let publications: any[] = [];

// 		try {
// 			const client = createClient({ fetch });
// 			if (search) {
// 				publications = await client.getAllByType('case_study', {
// 					filters: [prismic.filter.fulltext('document', search?.toString())]
// 				});
// 			}

// 			console.log(publications);
// 		} catch (error) {}

// 		// Process the form data and perform actions
// 		return { success: true, publications };
// 	}
// };

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('page', {
		filters: [prismic.filter.not('my.page.uid', 'home')]
	});

	return pages.map((page) => {
		return {
			uid: page.uid
		};
	});
}
