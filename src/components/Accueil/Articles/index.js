import React, {   } from 'react';
import {
    Div21, Img,
    Div1, Li, Ul, A1, I,
    P, Div23, Div2, A,
    H5, Div22, Div231
} from './style'

const Recipes = ({ articles }) => {
    const favorite = localStorage.getItem('token') ?
            <Div231>< A href="#"><I className="fa fa-heart"></I></A></Div231> : "";
    return (
        <Ul>

            {articles.map(article =>
                <Li key={article.id}>
                    <Div1>
                        <A1 href="#">
                            <Img src={article.image} alt={article.image} />
                        </A1>
                    </Div1>
                    <Div2>
                        <Div21>
                            <H5>{article.title.substr(0, 15)}...</H5>
                        </Div21>
                        <Div23>

                            {favorite}

                        </Div23>
                        <Div22>
                            <P>{article.description.substr(0, 100)}...</P>
                        </Div22>
                    </Div2>
                </Li>
            )}

        </Ul>
    );
};

export default Recipes;