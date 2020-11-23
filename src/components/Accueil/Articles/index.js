import React from 'react';
import {
    Span3, Span1, Div21,
    Img, Div1, Li, Ul,
    A1, A, P,
    Div23, Div2,
    H5, Span2, Div22,
} from './style'

const Recipes = ({ articles }) => {

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
                            <A href="#">
                                <Span1>$79.99</Span1>
                                <Span2>$69.99</Span2>
                            </A>
                            <Span3 className="product_rating"></Span3>
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